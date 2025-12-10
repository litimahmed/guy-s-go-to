/**
 * Static Admin Content
 * Hardcoded data for admin dashboard - all in French
 */

import { Professional } from "@/types/admin/professional";
import { Service } from "@/types/admin/service";
import { Category } from "@/types/admin/category";
import { ContactResponse } from "@/types/admin/contact";
import { PartnerResponse } from "@/types/admin/partner";

// =============================================================================
// CATEGORIES
// =============================================================================
export const staticCategories: Category[] = [
  {
    categorie_id: "1",
    nom_categorie: "Santé & Bien-être",
    description_categorie: "Services médicaux, soins personnels, fitness et bien-être général pour améliorer votre qualité de vie.",
    couleur_theme: "#10B981",
    ordre_affichage: 1,
    photo_principale_cat: "/placeholder.svg",
    active: true,
    date_creation: "2024-01-15T10:00:00Z"
  },
  {
    categorie_id: "2",
    nom_categorie: "Beauté & Esthétique",
    description_categorie: "Coiffure, maquillage, soins du visage et du corps, manucure et pédicure.",
    couleur_theme: "#EC4899",
    ordre_affichage: 2,
    photo_principale_cat: "/placeholder.svg",
    active: true,
    date_creation: "2024-01-15T10:30:00Z"
  },
  {
    categorie_id: "3",
    nom_categorie: "Services à Domicile",
    description_categorie: "Plomberie, électricité, ménage, jardinage et autres services pour votre maison.",
    couleur_theme: "#3B82F6",
    ordre_affichage: 3,
    photo_principale_cat: "/placeholder.svg",
    active: true,
    date_creation: "2024-01-16T09:00:00Z"
  },
  {
    categorie_id: "4",
    nom_categorie: "Éducation & Formation",
    description_categorie: "Cours particuliers, formations professionnelles, coaching et développement personnel.",
    couleur_theme: "#8B5CF6",
    ordre_affichage: 4,
    photo_principale_cat: "/placeholder.svg",
    active: true,
    date_creation: "2024-01-17T14:00:00Z"
  },
  {
    categorie_id: "5",
    nom_categorie: "Automobile",
    description_categorie: "Réparation, entretien, lavage et services automobiles complets.",
    couleur_theme: "#F59E0B",
    ordre_affichage: 5,
    photo_principale_cat: "/placeholder.svg",
    active: true,
    date_creation: "2024-01-18T11:00:00Z"
  },
  {
    categorie_id: "6",
    nom_categorie: "Restauration & Traiteur",
    description_categorie: "Services de restauration, traiteur pour événements, livraison de repas.",
    couleur_theme: "#EF4444",
    ordre_affichage: 6,
    photo_principale_cat: "/placeholder.svg",
    active: true,
    date_creation: "2024-01-19T08:00:00Z"
  },
  {
    categorie_id: "7",
    nom_categorie: "Événementiel",
    description_categorie: "Organisation de mariages, fêtes, conférences et tous types d'événements.",
    couleur_theme: "#14B8A6",
    ordre_affichage: 7,
    photo_principale_cat: "/placeholder.svg",
    active: true,
    date_creation: "2024-01-20T16:00:00Z"
  },
  {
    categorie_id: "8",
    nom_categorie: "Services Juridiques",
    description_categorie: "Avocats, notaires, conseils juridiques et assistance légale.",
    couleur_theme: "#6366F1",
    ordre_affichage: 8,
    photo_principale_cat: "/placeholder.svg",
    active: false,
    date_creation: "2024-01-21T12:00:00Z"
  }
];

// =============================================================================
// PROFESSIONALS
// =============================================================================
export const staticProfessionals: Professional[] = [
  {
    professionnel_id: "prof-001",
    nom: "Benali",
    prenom: "Mohamed",
    email: "mohamed.benali@email.com",
    telephone: "+213551234567",
    adresse: "15 Rue Didouche Mourad",
    ville: "Alger",
    pays: "Algérie",
    description: "Médecin généraliste avec plus de 15 ans d'expérience. Spécialisé dans la médecine familiale et le suivi des maladies chroniques.",
    categorie: "Santé & Bien-être",
    siteweb: "https://dr-benali.dz",
    facebook: "https://facebook.com/drbenali",
    tiktok: "",
    instagram: "https://instagram.com/drbenali",
    date_creation: "2024-02-01T09:00:00Z",
    actif: true
  },
  {
    professionnel_id: "prof-002",
    nom: "Meziane",
    prenom: "Amina",
    email: "amina.meziane@email.com",
    telephone: "+213552345678",
    adresse: "45 Boulevard Mohamed V",
    ville: "Oran",
    pays: "Algérie",
    description: "Coiffeuse professionnelle et experte en coloration. Diplômée de l'école de coiffure de Paris. Services à domicile disponibles.",
    categorie: "Beauté & Esthétique",
    siteweb: "",
    facebook: "https://facebook.com/aminacoiffure",
    tiktok: "https://tiktok.com/@aminacoiffure",
    instagram: "https://instagram.com/aminacoiffure",
    date_creation: "2024-02-05T14:30:00Z",
    actif: true
  },
  {
    professionnel_id: "prof-003",
    nom: "Khelifi",
    prenom: "Youcef",
    email: "youcef.khelifi@email.com",
    telephone: "+213553456789",
    adresse: "78 Rue des Frères Bouadou",
    ville: "Constantine",
    pays: "Algérie",
    description: "Plombier agréé avec 10 ans d'expérience. Interventions rapides pour tous types de travaux de plomberie et chauffage.",
    categorie: "Services à Domicile",
    siteweb: "",
    facebook: "https://facebook.com/khelifi.plomberie",
    tiktok: "",
    instagram: "",
    date_creation: "2024-02-10T11:00:00Z",
    actif: true
  },
  {
    professionnel_id: "prof-004",
    nom: "Boudiaf",
    prenom: "Fatima",
    email: "fatima.boudiaf@email.com",
    telephone: "+213554567890",
    adresse: "23 Avenue de l'Indépendance",
    ville: "Annaba",
    pays: "Algérie",
    description: "Professeure certifiée de mathématiques et physique. Cours particuliers pour tous niveaux du collège au baccalauréat.",
    categorie: "Éducation & Formation",
    siteweb: "https://coursfatima.dz",
    facebook: "https://facebook.com/coursfatima",
    tiktok: "",
    instagram: "https://instagram.com/profboudiaf",
    date_creation: "2024-02-15T16:00:00Z",
    actif: true
  },
  {
    professionnel_id: "prof-005",
    nom: "Slimani",
    prenom: "Karim",
    email: "karim.slimani@email.com",
    telephone: "+213555678901",
    adresse: "112 Route de Béjaïa",
    ville: "Sétif",
    pays: "Algérie",
    description: "Mécanicien automobile expert toutes marques. Diagnostic électronique, révision complète et réparations mécaniques.",
    categorie: "Automobile",
    siteweb: "",
    facebook: "https://facebook.com/garagesslimani",
    tiktok: "",
    instagram: "https://instagram.com/garagesslimani",
    date_creation: "2024-02-20T08:30:00Z",
    actif: true
  },
  {
    professionnel_id: "prof-006",
    nom: "Hamdi",
    prenom: "Nadia",
    email: "nadia.hamdi@email.com",
    telephone: "+213556789012",
    adresse: "56 Rue Ben M'hidi",
    ville: "Blida",
    pays: "Algérie",
    description: "Chef cuisinière et traiteuse pour tous événements. Spécialités algériennes et cuisine internationale. Buffets et repas sur mesure.",
    categorie: "Restauration & Traiteur",
    siteweb: "https://traiteurnadia.dz",
    facebook: "https://facebook.com/traiteurnadia",
    tiktok: "https://tiktok.com/@chefnadia",
    instagram: "https://instagram.com/traiteurnadia",
    date_creation: "2024-02-25T13:00:00Z",
    actif: true
  },
  {
    professionnel_id: "prof-007",
    nom: "Bensalem",
    prenom: "Omar",
    email: "omar.bensalem@email.com",
    telephone: "+213557890123",
    adresse: "89 Avenue du 1er Novembre",
    ville: "Tlemcen",
    pays: "Algérie",
    description: "Organisateur d'événements avec 8 ans d'expérience. Mariages, anniversaires, séminaires professionnels. Service clé en main.",
    categorie: "Événementiel",
    siteweb: "https://eventsomar.dz",
    facebook: "https://facebook.com/eventsomar",
    tiktok: "",
    instagram: "https://instagram.com/eventsomar",
    date_creation: "2024-03-01T10:00:00Z",
    actif: true
  },
  {
    professionnel_id: "prof-008",
    nom: "Cherif",
    prenom: "Leila",
    email: "leila.cherif@email.com",
    telephone: "+213558901234",
    adresse: "34 Boulevard Zighout Youcef",
    ville: "Alger",
    pays: "Algérie",
    description: "Avocate spécialisée en droit des affaires et droit de la famille. 12 ans d'expérience au barreau d'Alger.",
    categorie: "Services Juridiques",
    siteweb: "https://avocatcherif.dz",
    facebook: "",
    tiktok: "",
    instagram: "",
    date_creation: "2024-03-05T09:00:00Z",
    actif: false
  },
  {
    professionnel_id: "prof-009",
    nom: "Taleb",
    prenom: "Sofiane",
    email: "sofiane.taleb@email.com",
    telephone: "+213559012345",
    adresse: "67 Rue Hassiba Ben Bouali",
    ville: "Alger",
    pays: "Algérie",
    description: "Coach sportif certifié. Programmes personnalisés de fitness, musculation et perte de poids. Coaching à domicile ou en salle.",
    categorie: "Santé & Bien-être",
    siteweb: "",
    facebook: "https://facebook.com/coachsofiane",
    tiktok: "https://tiktok.com/@coachsofiane",
    instagram: "https://instagram.com/coachsofiane",
    date_creation: "2024-03-10T15:00:00Z",
    actif: true
  },
  {
    professionnel_id: "prof-010",
    nom: "Aoudia",
    prenom: "Samira",
    email: "samira.aoudia@email.com",
    telephone: "+213550123456",
    adresse: "21 Rue Larbi Ben M'hidi",
    ville: "Béjaïa",
    pays: "Algérie",
    description: "Esthéticienne diplômée. Soins du visage, épilation, maquillage professionnel et soins corporels. Institut moderne et équipé.",
    categorie: "Beauté & Esthétique",
    siteweb: "",
    facebook: "https://facebook.com/institutsamira",
    tiktok: "",
    instagram: "https://instagram.com/institutsamira",
    date_creation: "2024-03-15T11:30:00Z",
    actif: true
  },
  {
    professionnel_id: "prof-011",
    nom: "Mansouri",
    prenom: "Rachid",
    email: "rachid.mansouri@email.com",
    telephone: "+213551234568",
    adresse: "98 Avenue Colonel Amirouche",
    ville: "Tizi Ouzou",
    pays: "Algérie",
    description: "Électricien professionnel agréé. Installation, dépannage et mise aux normes électriques. Devis gratuit.",
    categorie: "Services à Domicile",
    siteweb: "",
    facebook: "https://facebook.com/elecmansouri",
    tiktok: "",
    instagram: "",
    date_creation: "2024-03-20T08:00:00Z",
    actif: true
  },
  {
    professionnel_id: "prof-012",
    nom: "Bouzid",
    prenom: "Nawal",
    email: "nawal.bouzid@email.com",
    telephone: "+213552345679",
    adresse: "43 Rue de la Liberté",
    ville: "Batna",
    pays: "Algérie",
    description: "Professeure d'anglais native du Canada. Cours pour adultes et enfants, préparation aux examens TOEFL et IELTS.",
    categorie: "Éducation & Formation",
    siteweb: "https://englishwithnawal.dz",
    facebook: "https://facebook.com/englishwithnawal",
    tiktok: "",
    instagram: "https://instagram.com/englishwithnawal",
    date_creation: "2024-03-25T14:00:00Z",
    actif: true
  }
];

// =============================================================================
// SERVICES
// =============================================================================
export const staticServices: Service[] = [
  {
    service_id: "serv-001",
    nom_service: "Consultation Médicale Générale",
    description_service: "Consultation complète avec examen clinique, diagnostic et prescription. Suivi des maladies chroniques inclus.",
    prix_service: 2500,
    duree_moyenne: 30,
    actif: true,
    date_creation: "2024-02-02T10:00:00Z",
    photo_principale: "/placeholder.svg",
    options: "Ordonnance,Certificat médical,Orientation spécialiste",
    jours_de_travail: "Dimanche,Lundi,Mardi,Mercredi,Jeudi",
    jours_de_repos: "Vendredi,Samedi",
    jours_de_conge: "",
    categorie: "Santé & Bien-être",
    proffessionnel_id: "prof-001"
  },
  {
    service_id: "serv-002",
    nom_service: "Coupe et Brushing Femme",
    description_service: "Coupe personnalisée selon la morphologie du visage, suivie d'un brushing professionnel. Conseil coiffure inclus.",
    prix_service: 1500,
    duree_moyenne: 60,
    actif: true,
    date_creation: "2024-02-06T11:00:00Z",
    photo_principale: "/placeholder.svg",
    options: "Soin capillaire,Massage crânien",
    jours_de_travail: "Dimanche,Lundi,Mardi,Mercredi,Jeudi,Samedi",
    jours_de_repos: "Vendredi",
    jours_de_conge: "",
    categorie: "Beauté & Esthétique",
    proffessionnel_id: "prof-002"
  },
  {
    service_id: "serv-003",
    nom_service: "Coloration Professionnelle",
    description_service: "Coloration complète avec produits professionnels de qualité. Conseils personnalisés pour le choix de la couleur.",
    prix_service: 3000,
    duree_moyenne: 120,
    actif: true,
    date_creation: "2024-02-06T11:30:00Z",
    photo_principale: "/placeholder.svg",
    options: "Balayage,Mèches,Soin post-coloration",
    jours_de_travail: "Dimanche,Lundi,Mardi,Mercredi,Jeudi,Samedi",
    jours_de_repos: "Vendredi",
    jours_de_conge: "",
    categorie: "Beauté & Esthétique",
    proffessionnel_id: "prof-002"
  },
  {
    service_id: "serv-004",
    nom_service: "Dépannage Plomberie Urgence",
    description_service: "Intervention rapide pour fuites, canalisations bouchées, problèmes de chauffe-eau. Disponible 7j/7.",
    prix_service: 3500,
    duree_moyenne: 90,
    actif: true,
    date_creation: "2024-02-11T09:00:00Z",
    photo_principale: "/placeholder.svg",
    options: "Pièces détachées,Garantie travaux",
    jours_de_travail: "Dimanche,Lundi,Mardi,Mercredi,Jeudi,Vendredi,Samedi",
    jours_de_repos: "",
    jours_de_conge: "",
    categorie: "Services à Domicile",
    proffessionnel_id: "prof-003"
  },
  {
    service_id: "serv-005",
    nom_service: "Installation Sanitaire",
    description_service: "Installation complète de sanitaires: WC, lavabo, douche, baignoire. Travail soigné et garanti.",
    prix_service: 8000,
    duree_moyenne: 240,
    actif: true,
    date_creation: "2024-02-11T09:30:00Z",
    photo_principale: "/placeholder.svg",
    options: "Fourniture matériel,Évacuation ancien équipement",
    jours_de_travail: "Dimanche,Lundi,Mardi,Mercredi,Jeudi",
    jours_de_repos: "Vendredi,Samedi",
    jours_de_conge: "",
    categorie: "Services à Domicile",
    proffessionnel_id: "prof-003"
  },
  {
    service_id: "serv-006",
    nom_service: "Cours de Mathématiques (Lycée)",
    description_service: "Cours particuliers de mathématiques pour élèves du lycée. Préparation au BAC, exercices et méthodologie.",
    prix_service: 2000,
    duree_moyenne: 90,
    actif: true,
    date_creation: "2024-02-16T14:00:00Z",
    photo_principale: "/placeholder.svg",
    options: "Support de cours,Exercices supplémentaires,Cours en ligne",
    jours_de_travail: "Dimanche,Lundi,Mardi,Mercredi,Jeudi,Samedi",
    jours_de_repos: "Vendredi",
    jours_de_conge: "",
    categorie: "Éducation & Formation",
    proffessionnel_id: "prof-004"
  },
  {
    service_id: "serv-007",
    nom_service: "Révision Automobile Complète",
    description_service: "Révision complète: vidange, filtres, freins, pneus, éclairage. Diagnostic électronique inclus.",
    prix_service: 6000,
    duree_moyenne: 180,
    actif: true,
    date_creation: "2024-02-21T10:00:00Z",
    photo_principale: "/placeholder.svg",
    options: "Pièces origine,Pièces adaptables,Lavage offert",
    jours_de_travail: "Dimanche,Lundi,Mardi,Mercredi,Jeudi",
    jours_de_repos: "Vendredi,Samedi",
    jours_de_conge: "",
    categorie: "Automobile",
    proffessionnel_id: "prof-005"
  },
  {
    service_id: "serv-008",
    nom_service: "Buffet Mariage (100 personnes)",
    description_service: "Buffet complet pour mariage incluant entrées, plats principaux, desserts et boissons. Service et décoration inclus.",
    prix_service: 150000,
    duree_moyenne: 480,
    actif: true,
    date_creation: "2024-02-26T11:00:00Z",
    photo_principale: "/placeholder.svg",
    options: "Gâteau de mariage,Fontaine chocolat,Personnel supplémentaire",
    jours_de_travail: "Dimanche,Lundi,Mardi,Mercredi,Jeudi,Vendredi,Samedi",
    jours_de_repos: "",
    jours_de_conge: "",
    categorie: "Restauration & Traiteur",
    proffessionnel_id: "prof-006"
  },
  {
    service_id: "serv-009",
    nom_service: "Organisation Mariage Clé en Main",
    description_service: "Organisation complète de votre mariage: salle, traiteur, décoration, photographe, DJ. Coordination jour J.",
    prix_service: 50000,
    duree_moyenne: 0,
    actif: true,
    date_creation: "2024-03-02T09:00:00Z",
    photo_principale: "/placeholder.svg",
    options: "Vidéaste,Fleuriste,Voiture de collection",
    jours_de_travail: "Dimanche,Lundi,Mardi,Mercredi,Jeudi,Vendredi,Samedi",
    jours_de_repos: "",
    jours_de_conge: "",
    categorie: "Événementiel",
    proffessionnel_id: "prof-007"
  },
  {
    service_id: "serv-010",
    nom_service: "Coaching Fitness Personnel",
    description_service: "Programme d'entraînement personnalisé avec suivi nutritionnel. Séances à domicile ou en salle.",
    prix_service: 3000,
    duree_moyenne: 60,
    actif: true,
    date_creation: "2024-03-11T16:00:00Z",
    photo_principale: "/placeholder.svg",
    options: "Plan alimentaire,Suivi en ligne,Équipement fourni",
    jours_de_travail: "Dimanche,Lundi,Mardi,Mercredi,Jeudi,Samedi",
    jours_de_repos: "Vendredi",
    jours_de_conge: "",
    categorie: "Santé & Bien-être",
    proffessionnel_id: "prof-009"
  },
  {
    service_id: "serv-011",
    nom_service: "Soin du Visage Complet",
    description_service: "Soin visage incluant nettoyage en profondeur, gommage, masque et hydratation. Adapté à votre type de peau.",
    prix_service: 2500,
    duree_moyenne: 75,
    actif: true,
    date_creation: "2024-03-16T10:00:00Z",
    photo_principale: "/placeholder.svg",
    options: "Massage facial,Soin anti-âge,Épilation sourcils",
    jours_de_travail: "Dimanche,Lundi,Mardi,Mercredi,Jeudi,Samedi",
    jours_de_repos: "Vendredi",
    jours_de_conge: "",
    categorie: "Beauté & Esthétique",
    proffessionnel_id: "prof-010"
  },
  {
    service_id: "serv-012",
    nom_service: "Installation Électrique Complète",
    description_service: "Installation électrique neuve ou rénovation complète. Mise aux normes, tableau électrique, prises et éclairage.",
    prix_service: 25000,
    duree_moyenne: 480,
    actif: true,
    date_creation: "2024-03-21T09:00:00Z",
    photo_principale: "/placeholder.svg",
    options: "Domotique,Interrupteurs design,Certificat conformité",
    jours_de_travail: "Dimanche,Lundi,Mardi,Mercredi,Jeudi",
    jours_de_repos: "Vendredi,Samedi",
    jours_de_conge: "",
    categorie: "Services à Domicile",
    proffessionnel_id: "prof-011"
  },
  {
    service_id: "serv-013",
    nom_service: "Cours d'Anglais Intensif",
    description_service: "Formation intensive en anglais pour adultes. Focus conversation, grammaire et préparation examens internationaux.",
    prix_service: 2500,
    duree_moyenne: 120,
    actif: true,
    date_creation: "2024-03-26T15:00:00Z",
    photo_principale: "/placeholder.svg",
    options: "Préparation TOEFL,Préparation IELTS,Cours en ligne",
    jours_de_travail: "Dimanche,Lundi,Mardi,Mercredi,Jeudi,Samedi",
    jours_de_repos: "Vendredi",
    jours_de_conge: "",
    categorie: "Éducation & Formation",
    proffessionnel_id: "prof-012"
  },
  {
    service_id: "serv-014",
    nom_service: "Diagnostic Électronique Auto",
    description_service: "Diagnostic complet du système électronique de votre véhicule. Lecture et effacement des codes défaut.",
    prix_service: 2000,
    duree_moyenne: 45,
    actif: true,
    date_creation: "2024-02-21T11:00:00Z",
    photo_principale: "/placeholder.svg",
    options: "Rapport détaillé,Conseils réparation",
    jours_de_travail: "Dimanche,Lundi,Mardi,Mercredi,Jeudi",
    jours_de_repos: "Vendredi,Samedi",
    jours_de_conge: "",
    categorie: "Automobile",
    proffessionnel_id: "prof-005"
  },
  {
    service_id: "serv-015",
    nom_service: "Consultation Juridique",
    description_service: "Consultation juridique en droit des affaires ou droit de la famille. Analyse de dossier et conseils personnalisés.",
    prix_service: 5000,
    duree_moyenne: 60,
    actif: false,
    date_creation: "2024-03-06T10:00:00Z",
    photo_principale: "/placeholder.svg",
    options: "Rédaction contrat,Représentation tribunal",
    jours_de_travail: "Dimanche,Lundi,Mardi,Mercredi,Jeudi",
    jours_de_repos: "Vendredi,Samedi",
    jours_de_conge: "",
    categorie: "Services Juridiques",
    proffessionnel_id: "prof-008"
  }
];

// =============================================================================
// CONTACT
// =============================================================================
export const staticContact: ContactResponse = {
  id: 1,
  titre: {
    fr: "Contactez-nous",
    ar: "اتصل بنا",
    en: "Contact Us"
  },
  email: "contact@toorrii.com",
  telephone_1: "+213 555 123 456",
  telephone_2: "+213 555 789 012",
  telephone_fixe: "+213 21 123 456",
  adresse: {
    fr: "123 Rue Didouche Mourad, Alger Centre",
    ar: "123 شارع ديدوش مراد، وسط الجزائر",
    en: "123 Didouche Mourad Street, Algiers Center"
  },
  ville: {
    fr: "Alger",
    ar: "الجزائر",
    en: "Algiers"
  },
  wilaya: {
    fr: "Alger",
    ar: "الجزائر",
    en: "Algiers"
  },
  horaires: "Dimanche - Jeudi: 08h00 - 17h00 | Vendredi - Samedi: Fermé",
  site_web: "https://www.toorrii.com",
  facebook: "https://facebook.com/toorrii",
  instagram: "https://instagram.com/toorrii",
  tiktok: "https://tiktok.com/@toorrii",
  linkedin: "https://linkedin.com/company/toorrii",
  x: "https://x.com/toorrii",
  message_acceuil: {
    fr: "Bienvenue chez Toorrii ! Nous sommes là pour vous aider à trouver les meilleurs professionnels.",
    ar: "مرحبًا بكم في توري! نحن هنا لمساعدتكم في العثور على أفضل المحترفين.",
    en: "Welcome to Toorrii! We are here to help you find the best professionals."
  },
  date_creation: "2024-01-01T00:00:00Z"
};

// =============================================================================
// PARTNERS (for admin)
// =============================================================================
export const staticAdminPartners: PartnerResponse[] = [
  {
    id: 1,
    nom_partenaire: [
      { lang: "fr", value: "Sonatrach" },
      { lang: "ar", value: "سوناطراك" },
      { lang: "en", value: "Sonatrach" }
    ],
    description: [
      { lang: "fr", value: "Sonatrach est la compagnie nationale algérienne d'hydrocarbures. Leader africain et acteur majeur sur la scène énergétique mondiale." },
      { lang: "ar", value: "سوناطراك هي الشركة الوطنية الجزائرية للمحروقات. رائدة أفريقيًا وفاعل رئيسي على الساحة الطاقوية العالمية." },
      { lang: "en", value: "Sonatrach is Algeria's national oil and gas company. African leader and major player on the global energy stage." }
    ],
    adresse: [{
      rue: [{ lang: "fr", value: "Djenane El Malik" }, { lang: "ar", value: "جنان الملك" }, { lang: "en", value: "Djenane El Malik" }],
      ville: [{ lang: "fr", value: "Hydra, Alger" }, { lang: "ar", value: "حيدرة، الجزائر" }, { lang: "en", value: "Hydra, Algiers" }],
      pays: [{ lang: "fr", value: "Algérie" }, { lang: "ar", value: "الجزائر" }, { lang: "en", value: "Algeria" }]
    }],
    email: "contact@sonatrach.dz",
    telephone: "+213 21 54 70 00",
    site_web: "https://sonatrach.com",
    actif: true,
    facebook: "https://facebook.com/sonatrach",
    instagram: "",
    tiktok: "",
    type_partenaire: "COMMERCIAL",
    date_deb: "2024-01-01",
    date_fin: "2025-12-31",
    date_creation_entreprise: "1963-12-31",
    priorite_affichage: 1,
    date_ajout: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    nom_partenaire: [
      { lang: "fr", value: "Djezzy" },
      { lang: "ar", value: "جيزي" },
      { lang: "en", value: "Djezzy" }
    ],
    description: [
      { lang: "fr", value: "Djezzy est le premier opérateur de téléphonie mobile en Algérie. Réseau de qualité et services innovants pour tous." },
      { lang: "ar", value: "جيزي هي أول مشغل للهاتف المحمول في الجزائر. شبكة عالية الجودة وخدمات مبتكرة للجميع." },
      { lang: "en", value: "Djezzy is Algeria's first mobile phone operator. Quality network and innovative services for everyone." }
    ],
    adresse: [{
      rue: [{ lang: "fr", value: "Lotissement Doudou Mokhtar" }, { lang: "ar", value: "تجزئة دودو مختار" }, { lang: "en", value: "Lotissement Doudou Mokhtar" }],
      ville: [{ lang: "fr", value: "Ben Aknoun, Alger" }, { lang: "ar", value: "بن عكنون، الجزائر" }, { lang: "en", value: "Ben Aknoun, Algiers" }],
      pays: [{ lang: "fr", value: "Algérie" }, { lang: "ar", value: "الجزائر" }, { lang: "en", value: "Algeria" }]
    }],
    email: "contact@djezzy.dz",
    telephone: "+213 770 00 00 00",
    site_web: "https://www.djezzy.dz",
    actif: true,
    facebook: "https://facebook.com/djezzy",
    instagram: "https://instagram.com/djezzy",
    tiktok: "",
    type_partenaire: "TECHNIQUE",
    date_deb: "2024-02-01",
    date_fin: "2025-12-31",
    date_creation_entreprise: "2001-02-15",
    priorite_affichage: 2,
    date_ajout: "2024-02-01T09:00:00Z"
  },
  {
    id: 3,
    nom_partenaire: [
      { lang: "fr", value: "Mobilis" },
      { lang: "ar", value: "موبيليس" },
      { lang: "en", value: "Mobilis" }
    ],
    description: [
      { lang: "fr", value: "Mobilis, opérateur national de téléphonie mobile. Premier réseau public mobile en Algérie avec une couverture nationale." },
      { lang: "ar", value: "موبيليس، المتعامل الوطني للهاتف النقال. أول شبكة عمومية للهاتف المحمول في الجزائر بتغطية وطنية." },
      { lang: "en", value: "Mobilis, national mobile phone operator. First public mobile network in Algeria with national coverage." }
    ],
    adresse: [{
      rue: [{ lang: "fr", value: "Quartier des affaires" }, { lang: "ar", value: "حي الأعمال" }, { lang: "en", value: "Business District" }],
      ville: [{ lang: "fr", value: "Bab Ezzouar, Alger" }, { lang: "ar", value: "باب الزوار، الجزائر" }, { lang: "en", value: "Bab Ezzouar, Algiers" }],
      pays: [{ lang: "fr", value: "Algérie" }, { lang: "ar", value: "الجزائر" }, { lang: "en", value: "Algeria" }]
    }],
    email: "contact@mobilis.dz",
    telephone: "+213 661 00 00 00",
    site_web: "https://www.mobilis.dz",
    actif: true,
    facebook: "https://facebook.com/mobilis",
    instagram: "https://instagram.com/mobilis",
    tiktok: "",
    type_partenaire: "TECHNIQUE",
    date_deb: "2024-01-15",
    date_fin: "2025-12-31",
    date_creation_entreprise: "2003-08-01",
    priorite_affichage: 3,
    date_ajout: "2024-01-20T14:00:00Z"
  },
  {
    id: 4,
    nom_partenaire: [
      { lang: "fr", value: "Ooredoo Algérie" },
      { lang: "ar", value: "أوريدو الجزائر" },
      { lang: "en", value: "Ooredoo Algeria" }
    ],
    description: [
      { lang: "fr", value: "Ooredoo Algérie, opérateur de télécommunications offrant des services mobiles, internet et solutions entreprises." },
      { lang: "ar", value: "أوريدو الجزائر، مشغل اتصالات يقدم خدمات الهاتف المحمول والإنترنت وحلول الشركات." },
      { lang: "en", value: "Ooredoo Algeria, telecommunications operator offering mobile, internet and business solutions." }
    ],
    adresse: [{
      rue: [{ lang: "fr", value: "Route Nationale N°5" }, { lang: "ar", value: "الطريق الوطني رقم 5" }, { lang: "en", value: "National Road N°5" }],
      ville: [{ lang: "fr", value: "Dar El Beida, Alger" }, { lang: "ar", value: "الدار البيضاء، الجزائر" }, { lang: "en", value: "Dar El Beida, Algiers" }],
      pays: [{ lang: "fr", value: "Algérie" }, { lang: "ar", value: "الجزائر" }, { lang: "en", value: "Algeria" }]
    }],
    email: "contact@ooredoo.dz",
    telephone: "+213 550 00 00 00",
    site_web: "https://www.ooredoo.dz",
    actif: true,
    facebook: "https://facebook.com/ooredoodz",
    instagram: "https://instagram.com/ooredoodz",
    tiktok: "",
    type_partenaire: "TECHNIQUE",
    date_deb: "2024-03-01",
    date_fin: "2025-12-31",
    date_creation_entreprise: "2004-02-01",
    priorite_affichage: 4,
    date_ajout: "2024-03-01T11:00:00Z"
  },
  {
    id: 5,
    nom_partenaire: [
      { lang: "fr", value: "Sonelgaz" },
      { lang: "ar", value: "سونلغاز" },
      { lang: "en", value: "Sonelgaz" }
    ],
    description: [
      { lang: "fr", value: "Sonelgaz est le groupe industriel énergétique algérien. Production, transport et distribution d'électricité et de gaz." },
      { lang: "ar", value: "سونلغاز هي المجموعة الصناعية الطاقوية الجزائرية. إنتاج ونقل وتوزيع الكهرباء والغاز." },
      { lang: "en", value: "Sonelgaz is the Algerian energy industrial group. Production, transport and distribution of electricity and gas." }
    ],
    adresse: [{
      rue: [{ lang: "fr", value: "2 Boulevard Krim Belkacem" }, { lang: "ar", value: "2 شارع كريم بلقاسم" }, { lang: "en", value: "2 Boulevard Krim Belkacem" }],
      ville: [{ lang: "fr", value: "Alger Centre" }, { lang: "ar", value: "وسط الجزائر" }, { lang: "en", value: "Algiers Center" }],
      pays: [{ lang: "fr", value: "Algérie" }, { lang: "ar", value: "الجزائر" }, { lang: "en", value: "Algeria" }]
    }],
    email: "contact@sonelgaz.dz",
    telephone: "+213 21 72 31 00",
    site_web: "https://www.sonelgaz.dz",
    actif: true,
    facebook: "https://facebook.com/sonelgaz",
    instagram: "",
    tiktok: "",
    type_partenaire: "COMMERCIAL",
    date_deb: "2024-01-01",
    date_fin: "2025-12-31",
    date_creation_entreprise: "1969-07-28",
    priorite_affichage: 5,
    date_ajout: "2024-01-10T08:00:00Z"
  },
  {
    id: 6,
    nom_partenaire: [
      { lang: "fr", value: "Banque d'Algérie" },
      { lang: "ar", value: "بنك الجزائر" },
      { lang: "en", value: "Bank of Algeria" }
    ],
    description: [
      { lang: "fr", value: "La Banque d'Algérie est la banque centrale de la République algérienne. Régulation monétaire et stabilité financière." },
      { lang: "ar", value: "بنك الجزائر هو البنك المركزي للجمهورية الجزائرية. التنظيم النقدي والاستقرار المالي." },
      { lang: "en", value: "The Bank of Algeria is the central bank of the Algerian Republic. Monetary regulation and financial stability." }
    ],
    adresse: [{
      rue: [{ lang: "fr", value: "38 Avenue Franklin Roosevelt" }, { lang: "ar", value: "38 شارع فرانكلين روزفلت" }, { lang: "en", value: "38 Franklin Roosevelt Avenue" }],
      ville: [{ lang: "fr", value: "Alger Centre" }, { lang: "ar", value: "وسط الجزائر" }, { lang: "en", value: "Algiers Center" }],
      pays: [{ lang: "fr", value: "Algérie" }, { lang: "ar", value: "الجزائر" }, { lang: "en", value: "Algeria" }]
    }],
    email: "contact@bank-of-algeria.dz",
    telephone: "+213 21 23 00 23",
    site_web: "https://www.bank-of-algeria.dz",
    actif: true,
    facebook: "",
    instagram: "",
    tiktok: "",
    type_partenaire: "COMMERCIAL",
    date_deb: "2024-02-15",
    date_fin: "2025-12-31",
    date_creation_entreprise: "1963-01-01",
    priorite_affichage: 6,
    date_ajout: "2024-02-15T16:00:00Z"
  },
  {
    id: 7,
    nom_partenaire: [
      { lang: "fr", value: "CNAS" },
      { lang: "ar", value: "الصندوق الوطني للتأمينات الاجتماعية" },
      { lang: "en", value: "CNAS" }
    ],
    description: [
      { lang: "fr", value: "Caisse Nationale des Assurances Sociales. Gestion de la sécurité sociale et couverture maladie pour les travailleurs algériens." },
      { lang: "ar", value: "الصندوق الوطني للتأمينات الاجتماعية. إدارة الضمان الاجتماعي والتغطية الصحية للعمال الجزائريين." },
      { lang: "en", value: "National Social Insurance Fund. Social security management and health coverage for Algerian workers." }
    ],
    adresse: [{
      rue: [{ lang: "fr", value: "9 Rue Amar Ali" }, { lang: "ar", value: "9 شارع عمار علي" }, { lang: "en", value: "9 Amar Ali Street" }],
      ville: [{ lang: "fr", value: "Ben Aknoun, Alger" }, { lang: "ar", value: "بن عكنون، الجزائر" }, { lang: "en", value: "Ben Aknoun, Algiers" }],
      pays: [{ lang: "fr", value: "Algérie" }, { lang: "ar", value: "الجزائر" }, { lang: "en", value: "Algeria" }]
    }],
    email: "contact@cnas.dz",
    telephone: "+213 21 91 58 58",
    site_web: "https://www.cnas.dz",
    actif: true,
    facebook: "https://facebook.com/cnasdz",
    instagram: "",
    tiktok: "",
    type_partenaire: "AUTRE",
    date_deb: "2024-04-01",
    date_fin: "2025-12-31",
    date_creation_entreprise: "1985-01-01",
    priorite_affichage: 7,
    date_ajout: "2024-04-01T10:00:00Z"
  },
  {
    id: 8,
    nom_partenaire: [
      { lang: "fr", value: "Air Algérie" },
      { lang: "ar", value: "الخطوط الجوية الجزائرية" },
      { lang: "en", value: "Air Algérie" }
    ],
    description: [
      { lang: "fr", value: "Air Algérie est la compagnie aérienne nationale. Vols domestiques et internationaux reliant l'Algérie au monde entier." },
      { lang: "ar", value: "الخطوط الجوية الجزائرية هي شركة الطيران الوطنية. رحلات داخلية ودولية تربط الجزائر بالعالم." },
      { lang: "en", value: "Air Algérie is the national airline. Domestic and international flights connecting Algeria to the world." }
    ],
    adresse: [{
      rue: [{ lang: "fr", value: "1 Place Maurice Audin" }, { lang: "ar", value: "1 ساحة موريس أودان" }, { lang: "en", value: "1 Place Maurice Audin" }],
      ville: [{ lang: "fr", value: "Alger Centre" }, { lang: "ar", value: "وسط الجزائر" }, { lang: "en", value: "Algiers Center" }],
      pays: [{ lang: "fr", value: "Algérie" }, { lang: "ar", value: "الجزائر" }, { lang: "en", value: "Algeria" }]
    }],
    email: "contact@airalgerie.dz",
    telephone: "+213 21 98 63 63",
    site_web: "https://www.airalgerie.dz",
    actif: false,
    facebook: "https://facebook.com/airalgerie",
    instagram: "https://instagram.com/airalgerie",
    tiktok: "",
    type_partenaire: "COMMERCIAL",
    date_deb: "2024-05-01",
    date_fin: "2024-12-31",
    date_creation_entreprise: "1947-05-21",
    priorite_affichage: 8,
    date_ajout: "2024-05-01T12:00:00Z"
  }
];
