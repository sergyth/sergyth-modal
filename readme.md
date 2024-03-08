````markdown
# Sergyth Modal

Une modale React légère et flexible, facile à intégrer et à personnaliser pour n'importe quelle application web.

## Installation

Vous pouvez installer `sergyth-modal` via npm :

```bash
npm install sergyth-modal
```
````

Ou via yarn :

```bash
yarn add sergyth-modal
```

## Exemple d'Utilisation

Pour utiliser le composant `Modal`, importez-le dans votre composant et ajoutez-le à votre JSX :

```jsx
import { useState } from "react";
import { Modal } from "sergyth-modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Ouvrir la Modale</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Contenu de votre modale ici.
      </Modal>
    </div>
  );
};

export default App;
```

## Props

`Modal` accepte les props suivantes pour la personnalisation :

- `isOpen`: Boolean - Détermine si la modale est affichée.
- `onClose`: Function - Fonction appelée lorsque la modale doit être fermée.
- `children`: Node - Le contenu à afficher dans la modale.
- `className`: Object - Objets optionnels pour les classes CSS personnalisées. Doit contenir `overlay` et/ou `content`.

## Personnalisation

Vous pouvez personnaliser le style de la modale en passant un objet `className` avec les classes CSS pour `overlay` et `content` :

```jsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  className={{
    overlay: "custom-overlay-class",
    content: "custom-content-class",
  }}
>
  Contenu personnalisé
</Modal>
```

Assurez-vous d'ajouter vos styles personnalisés dans votre feuille de style CSS :

```css
.custom-overlay-class {
  /* Vos styles d'overlay personnalisés */
}

.custom-content-class {
  /* Vos styles de contenu personnalisés */
}
```

## Licence

`sergyth-modal` est disponible sous la licence MIT.

```

```
