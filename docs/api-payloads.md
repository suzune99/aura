# Formats des Payloads API (JSON)

Ce document définit le format exact des données échangées entre le Frontend (Next.js) et le Backend (Laravel) pour les fonctionnalités clés du MVP.

---

## 1. Authentification

### Inscription
**POST /api/register**

**Requête (Request Body) :**
```json
{
  "name": "Camille",
  "email": "camille@example.com",
  "password": "MotDePasse123!",
  "password_confirmation": "MotDePasse123!"
}
```

**Réponse Succès (201 Created) :**
```json
{
  "message": "Compte créé avec succès.",
  "user": {
    "id": 1,
    "name": "Camille",
    "email": "camille@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Connexion
**POST /api/login**

**Requête (Request Body) :**
```json
{
  "email": "camille@example.com",
  "password": "MotDePasse123!"
}
```

**Réponse Succès (200 OK) :**
```json
{
  "message": "Connexion réussie.",
  "user": {
    "id": 1,
    "name": "Camille",
    "email": "camille@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 2. Onboarding (Profil utilisateur)

**POST /api/onboarding**

**Requête (Request Body) :**
```json
{
  "interests": ["Langues", "Programmation"],
  "goals": ["Apprendre le japonais", "Coder un projet personnel"],
  "challenges": ["Focus variable", "Procrastination"],
  "daily_availability": "1h"
}
```

**Réponse Succès (201 Created) :**
```json
{
  "message": "Profil initialisé avec succès.",
  "data": {
    "id": 1,
    "user_id": 1,
    "interests": ["Langues", "Programmation"],
    "goals": ["Apprendre le japonais", "Coder un projet personnel"],
    "challenges": ["Focus variable", "Procrastination"],
    "daily_availability": "1h"
  }
}
```

---

## 3. Daily Check-in

**POST /api/checkins**

**Requête (Request Body) :**
```json
{
  "energy": 7,
  "stress": 3,
  "sleep": 8,
  "focus": 6,
  "motivation": 7,
  "note": "Bonne matinée, un peu fatigué hier soir."
}
```

**Réponse Succès (201 Created) :**
```json
{
  "message": "Check-in enregistré.",
  "data": {
    "id": 42,
    "date": "2026-08-01",
    "capacity_score": 72,
    "interpretation": "Belle énergie"
  }
}
```

**Réponse Erreur (422 Unprocessable Entity - Ex: Déjà fait) :**
```json
{
  "message": "Un check-in existe déjà pour aujourd'hui.",
  "errors": {
    "date": ["Vous avez déjà effectué votre check-in du jour."]
  }
}
```

---

## 4. Tâches (Adaptive Planner)

### Créer une tâche
**POST /api/tasks**

**Requête (Request Body) :**
```json
{
  "title": "Rédiger la proposition client",
  "difficulty": 3,
  "estimated_duration": 45,
  "importance": 4,
  "category": "Travail",
  "due_date": "2026-08-05"
}
```

**Réponse Succès (201 Created) :**
```json
{
  "message": "Tâche créée.",
  "data": {
    "id": 105,
    "title": "Rédiger la proposition client",
    "difficulty": 3,
    "estimated_duration": 45,
    "importance": 4,
    "category": "Travail",
    "status": "todo",
    "due_date": "2026-08-05",
    "created_at": "2026-08-01T10:00:00Z"
  }
}
```

### Marquer une tâche comme terminée
**PATCH /api/tasks/{id}/complete**

**Réponse Succès (200 OK) :**
```json
{
  "message": "Tâche terminée. Bravo !",
  "data": {
    "id": 105,
    "status": "done",
    "completed_at": "2026-08-01T11:30:00Z"
  }
}
```

---

## 5. Journal

### Créer une entrée
**POST /api/journal**

**Requête (Request Body) :**
```json
{
  "mode": "quick",
  "content": "Journée dense mais j'ai tenu mon créneau de travail profond le matin."
}
```

**Réponse Succès (201 Created) :**
```json
{
  "message": "Entrée de journal enregistrée.",
  "data": {
    "id": 12,
    "mode": "quick",
    "content": "Journée dense mais j'ai tenu mon créneau de travail profond le matin.",
    "created_at": "2026-08-01T20:00:00Z"
  }
}
```

---

## 6. Dashboard (Données agrégées)

**GET /api/dashboard**

**Réponse Succès (200 OK) :**
```json
{
  "data": {
    "capacity": {
      "score": 72,
      "interpretation": "Belle énergie",
      "date": "2026-08-01"
    },
    "focus_tasks": [
      {
        "id": 105,
        "title": "Rédiger la proposition client",
        "difficulty": 3
      },
      {
        "id": 106,
        "title": "Marcher 20 minutes dehors",
        "difficulty": 2
      }
    ],
    "avoid_tasks": [
      {
        "id": 107,
        "title": "Refonte complète du site",
        "difficulty": 5
      }
    ],
    "stats": {
      "avg_energy": 7.2,
      "avg_sleep": 6.8,
      "avg_focus": 68,
      "current_streak": 12
    }
  }
}
```