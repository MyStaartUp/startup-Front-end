# My Flask Project

## Description
Une application Flask pour gérer et afficher des startups un peu comme un annuaire.

## Installation
. **Clonez ce dépôt :**
   
    git clone https://github.com/MyStaartUp/main.git
    cd MyStaartUp/main.git
. **Créez un environnement virtuel et activez-le** :

     python -m venv venv
     source venv/bin/activate 
 
.**Sous Windows** :

    venv\Scripts\activate

## Installez les dépendances :

     pip install -r requirements.txt

**Configurez votre base de données MySQL et mettez à jour l'URI dans main.py.**

**Appliquez les migrations si nécessaire** :

      flask db upgrade

**Lancez l'application :**

      python main.py

---

## Collaboration et mise à jour

Une fois que le projet est pret a etre update :
. **vous devez travailler sur une branche distincte** :
   
    git checkout -b ma-branche

Après avoir terminé votre travail, vous pouvez push vos modifications et ouvrir une Pull Request sur GitHub.
