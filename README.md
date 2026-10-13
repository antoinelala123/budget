# Budget en enveloppes

Un outil simple et gratuit pour répartir son salaire chaque mois, pensé pour les personnes qui n'y connaissent rien en gestion d'argent comme pour les autres.

Chaque euro a un rôle : les dépenses du mois restent sur le compte courant, les dépenses annuelles sont mises de côté petit à petit, et le reste part dans des « enveloppes » (livrets, placements, projets).

## Fonctionnalités

- **Virements du jour de paie** : la page calcule combien virer sur chaque enveloppe.
- **Dépenses mensuelles et annuelles** : les dépenses annuelles (assurance, entretien, cadeaux…) sont divisées par 12 et mises de côté chaque mois.
- **Enveloppes personnalisables** : nom, virement fixe, solde, part des primes, couleur, objectif avec date.
- **Le reste du mois** est envoyé sur l'enveloppe de ton choix.
- **Répartition des primes** (13e mois, participation…).
- **Repères** : part du logement, taux d'épargne, épargne de sécurité, objectifs, avertissements (crédits, marge, plafonds des livrets, règle des 5 ans du PEA).
- **Cases à cocher** pour voir son budget sans une dépense ou une catégorie.
- **Mode d'emploi** intégré, mode clair et sombre automatique.
- **Fonctionne hors ligne** et s'installe sur l'écran d'accueil du téléphone.

## Confidentialité

Aucune donnée ne quitte ton appareil. Il n'y a ni compte, ni serveur, ni publicité, ni statistiques. Tout est enregistré dans le navigateur de l'appareil utilisé.

Conséquence : si tu effaces les données du navigateur, changes de téléphone ou supprimes l'application de l'écran d'accueil, tes données disparaissent. Utilise régulièrement le bouton **« Copier une sauvegarde »** et garde le texte dans tes notes. Le bouton **« Restaurer »** le recharge sur n'importe quel appareil.

## Installer sur son téléphone

- **iPhone** : ouvre la page dans **Safari**, touche le bouton **Partager**, puis **« Sur l'écran d'accueil »**.
- **Android** : ouvre la page dans **Chrome**, menu **⋮**, puis **« Installer l'application »** ou **« Ajouter à l'écran d'accueil »**.

Attention sur iPhone : l'application installée et Safari ne partagent pas leurs données. Si tu as commencé dans Safari, copie une sauvegarde et restaure-la dans l'application.

## Mettre à jour la page

1. Modifie `index.html`.
2. Ouvre `sw.js` et change le numéro de version (`budget-v1` → `budget-v2`…).
3. Envoie les deux fichiers sur GitHub.

Les téléphones récupèrent la nouvelle version à la prochaine ouverture avec internet (parfois il faut fermer et rouvrir l'application une deuxième fois).

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | La page elle-même |
| `manifest.webmanifest` | Nom, icône et couleurs pour l'installation sur l'écran d'accueil |
| `sw.js` | Fonctionnement hors ligne |
| `icons/` | Icônes de l'application |
| `fonts/` | Polices Manrope et JetBrains Mono, avec leurs licences |

## Crédits

- Polices [Manrope](https://github.com/sharanda/manrope) et [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono), sous licence SIL Open Font License 1.1 (voir le dossier `fonts/`).
- Couleurs des enveloppes : palette Okabe-Ito, lisible par les personnes daltoniennes.

Les repères (33 % pour le logement, 3 à 6 mois d'épargne de sécurité, 35 % d'endettement…) sont des règles générales, pas des conseils financiers personnalisés.
