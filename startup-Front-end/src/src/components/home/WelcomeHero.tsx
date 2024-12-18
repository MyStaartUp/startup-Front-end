import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Search, Users, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';

const WelcomeHero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Découvrez les Startups de Demain
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Connectez-vous avec des startups innovantes, des investisseurs et des entrepreneurs passionnés
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Commencer maintenant
              </Button>
            </Link>
            <Link to="/search">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explorer les startups
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: Rocket,
                title: "1000+ Startups",
                description: "Découvrez des projets innovants"
              },
              {
                icon: Users,
                title: "500+ Investisseurs",
                description: "Connectez-vous avec des experts"
              },
              {
                icon: TrendingUp,
                title: "€10M+ Levés",
                description: "Financements réussis"
              },
              {
                icon: Search,
                title: "Recherche avancée",
                description: "Trouvez votre match parfait"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}