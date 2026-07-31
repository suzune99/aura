# 🧠 AURA — Second Cerveau Adaptatif

> Organise tes tâches et tes objectifs selon ton état mental du moment, au lieu d'exiger une performance constante.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?logo=laravel)](https://laravel.com/)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=next.js)](https://nextjs.org/)

---

## 🎯 Vision & Problème

Les outils de productivité classiques partent d'un postulat unique : l'utilisateur a une capacité stable d'un jour à l'autre. Ce postulat échoue pour :
1. **Les personnes dont la capacité mentale varie** (TDAH, burnout, intensité émotionnelle) : un système rigide produit de la culpabilité plutôt que du progrès.
2. **Les apprenants multi-objectifs** (polyglottes, multi-passionnés) : ils peinent à maintenir un fil conducteur et oublient où ils en étaient en revenant à un objectif délaissé.

**La solution AURA** : Un système qui s'adapte à la personne, pas l'inverse. Check-in quotidien → recalcul de la capacité → tâches adaptées + reprise de contexte exacte.

---

## ✨ Fonctionnalités Clés (MVP)

- **Onboarding intelligent** : Capture des intérêts, objectifs, défis et disponibilité.
- **Daily Check-in (30s)** : Évaluation de l'énergie, du stress, du sommeil, du focus et de la motivation.
- **Calcul de capacité adaptatif** : Algorithme pondéré qui filtre les tâches selon l'état du jour (ex: masquer les tâches de difficulté élevée si la capacité est < 40%).
- **Adaptive Planner** : Gestion des tâches avec recommandations dynamiques et liste "à éviter aujourd'hui".
- **Journal intelligent** : 3 modes (Quick, 5 min, Libre) avec futur résumé IA (sentiment, mots-clés, triggers).
- **Dashboard unifié** : Vue d'ensemble de la capacité, des tâches focus, des streaks et des statistiques hebdomadaires.

---

## 🛠️ Stack Technique

### Backend
- **Framework** : Laravel 12 (PHP 8.3+)
- **Base de données** : PostgreSQL (avec utilisation de `jsonb` et recherche full-text)
- **Cache** : Redis
- **Authentification** : Laravel Sanctum
- **Tests** : PHPUnit

### Frontend
- **Framework** : Next.js 14 (App Router, TypeScript)
- **Styling** : Tailwind CSS
- **Composants** : shadcn/ui
- **Formulaires** : React Hook Form + Zod
- **Visualisation** : Recharts

### IA & Data (Phases avancées)
- **LLM** : Groq API (LLaMA 3) pour les résumés et le coach contextuel
- **ML** : Microservice Python (FastAPI + scikit-learn) pour la prédiction de capacité

---

## 📁 Structure du Projet

Ce repository est organisé en mono-repo pour faciliter le développement local :

```text
aura/
├── backend/          # API Laravel (routes, contrôleurs, modèles, migrations)
├── frontend/         # Application Next.js (pages, composants, hooks)
├── docs/             # Documentation (ERD, spécifications fonctionnelles, user flows)
├── SCOPE.md          # Périmètre détaillé du MVP (V1), V2 et V3
└── README.md         # Ce fichier