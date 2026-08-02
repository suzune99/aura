# Entités de la Base de Données AURA (MVP)

## 1. `users` (Utilisateurs)
- `id` : UUID ou Big Integer (clé primaire)
- `name` : String (nom d'affichage)
- `email` : String (unique, utilisé pour la connexion)
- `password` : String (hashé avec bcrypt)
- `created_at`, `updated_at` : Timestamps

## 2. `profiles` (Profil utilisateur - issu de l'onboarding)
- `id` : UUID ou Big Integer (clé primaire)
- `user_id` : Foreign Key (lié à `users`, unique)
- `interests` : JSONB (liste des intérêts : langues, domaines)
- `goals` : JSONB (objectifs long terme)
- `challenges` : JSONB (défis actuels : attention, énergie, etc.)
- `daily_availability` : String (ex: "30min", "1h", "2h")
- `timezone` : String (ex: "Europe/Paris")
- `created_at`, `updated_at` : Timestamps

## 3. `check_ins` (État mental quotidien)
- `id` : UUID ou Big Integer (clé primaire)
- `user_id` : Foreign Key (lié à `users`)
- `date` : Date (unique par utilisateur, ex: 2026-08-01)
- `energy` : Integer (1 à 10)
- `stress` : Integer (1 à 10)
- `sleep` : Integer (1 à 10)
- `focus` : Integer (1 à 10)
- `motivation` : Integer (1 à 10)
- `note` : Text (nullable, note libre)
- `created_at`, `updated_at` : Timestamps

## 4. `tasks` (Tâches)
- `id` : UUID ou Big Integer (clé primaire)
- `user_id` : Foreign Key (lié à `users`)
- `title` : String
- `difficulty` : Integer (1 à 5)
- `estimated_duration` : Integer (en minutes)
- `importance` : Integer (1 à 5)
- `category` : String (ex: "Travail", "Apprentissage")
- `required_energy` : Integer (1 à 10)
- `status` : String (ex: "todo", "done", "deferred")
- `due_date` : Date (nullable)
- `created_at`, `updated_at` : Timestamps

## 5. `journal_entries` (Journal)
- `id` : UUID ou Big Integer (clé primaire)
- `user_id` : Foreign Key (lié à `users`)
- `date` : Timestamp
- `mode` : String ("quick", "5min", "libre")
- `content` : Text
- `ai_summary` : JSONB (nullable, sera rempli en Phase 5)
- `created_at`, `updated_at` : Timestamps
- 