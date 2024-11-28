import os
from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/startup_db'  # URI MySQL
db = SQLAlchemy(app)

# Configuration pour l'upload des fichiers
app.config['UPLOAD_FOLDER'] = 'static/uploads'  # Dossier où les images seront enregistrées
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # Limite la taille des fichiers à 16 MB

app.secret_key = 'une_chaine_secrete_et_unique'

class Startup(db.Model):
    __tablename__ = 'startups'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(200), nullable=False)
    logo = db.Column(db.String(255), nullable= True)
    category = db.Column(db.String(100), nullable=False, default='Non definie')  # Nouvelle colonne pour la catégorie

@app.route("/startups")
def list_startups():
    startups = Startup.query.all()  # Récupère toutes les startups
    return render_template("startups.html", startups=startups)

# la nouvelle route ici
@app.route('/add_startup', methods=['GET', 'POST'])
def add_startup():
    if request.method == 'POST':
        name = request.form['name']
        description = request.form['description']
        category = request.form['category'] if request.form['category'] else 'Non definie'

        # Vérifie si le fichier a été envoyé avec le formulaire
        if 'logo' not in request.files:
            flash('Pas de fichier de logo sélectionné.')
            return redirect(request.url)

        file = request.files['logo']
        
        # Si l'utilisateur n'a pas sélectionné de fichier
        if file.filename == '':
            flash('Aucun fichier sélectionné.')
            return redirect(request.url)

        # Si le fichier est bien un fichier autorisé
        if file:
            filename = secure_filename(file.filename)  # Sécurise le nom du fichier
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))  # Enregistre le fichier

            # Crée une nouvelle startup avec le chemin de l'image enregistrée
            logo_path = f"static/uploads/{filename}"  # Chemin relatif
            new_startup = Startup(name=name, description=description, logo=filename)
            db.session.add(new_startup)
            db.session.commit()
            flash('Startup ajoutée avec succès!')
            return redirect(url_for('list_startups'))

    return render_template('add_startup.html')

#delete
@app.route('/delete_startup/<int:id>', methods=['GET'])
def delete_startup(id):
    startup = Startup.query.get_or_404(id)
    db.session.delete(startup)
    db.session.commit()
    flash('Startup supprimée avec succès!')
    return redirect(url_for('list_startups'))

#modifie
@app.route('/edit_startup/<int:id>', methods=['GET', 'POST'])
def edit_startup(id):
    startup = Startup.query.get_or_404(id)
    if request.method == 'POST':
        startup.name = request.form['name']
        startup.description = request.form['description']

        # Vérifie si un nouveau fichier est téléchargé
        if 'logo' in request.files:
            file = request.files['logo']
            if file and file.filename != '':
                filename = secure_filename(file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                startup.logo = os.path.join(app.config['UPLOAD_FOLDER'], filename)

        db.session.commit()
        flash('Startup mise à jour avec succès!')
        return redirect(url_for('list_startups'))

    return render_template('edit_startup.html', startup=startup)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

#barre de recherche
@app.route('/search', methods=['GET'])
def search_startups():
    query = request.args.get('q')  # Récupère le terme de recherche depuis l'URL
    if query:
        startups = Startup.query.filter(Startup.name.like(f"%{query}%")).all()
    else:
        startups = Startup.query.all()
    return render_template('startups.html', startups=startups)

#category de startup
@app.route('/category/<string:category>')
def filter_by_category(category):
    startups = Startup.query.filter_by(category=category).all()
    return render_template('startups.html', startups=startups)

if __name__ == "__main__":
    with app.app_context():  # Création du contexte d'application
        db.create_all()  # Crée les tables dans MySQL si elles n'existent pas
    app.run(debug=True)
