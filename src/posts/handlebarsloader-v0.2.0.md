---
title: HandlebarsLoader v0.2.0
image: https://images.unsplash.com/photo-1503789496245-9f0b50b572d8
publish: 2015-02-28
type: post
tags:
  - javascript
  - github
  - bower
  - handlebars
categories:
  - code
  - opensource
readingTime: 5 Minutes
---

# HandlebarsLoader (v0.2.0)

Il y a quelques années, quand j'ai commencé le développement Javascript en front, j'ai commencé à utiliser [Handlebars](https://github.com/wycats/handlebars.js). 

<!-- more -->

Par défaut nous déclarions l'ensemble des templates et partials dans le `head` de notre page html à l'aide de balises `script` de type `text/html`.

```html
<script id="templateName" type="text/html">  
...
</script>  
```

J'avais tout de même optimisé le tout avec un yaml qui contenait la liste des `templates` et `partials` à utiliser et qui était utilisé lors de la génération de la page html pour créer toutes ces balises.

Afin de faciliter le développement, d'isoler les templates développés et d'optimiser un peu le tout (la page html n'était pas mise en cache pour diverses raisons) j'ai développé une première version d'[HandlebarsLoader](https://github.com/cbourgois/HandlebarsLoader).

HandlebarsLoader est un petit script permettant de charger dynamiquement plusieurs templates et partials Handlebars définit dans des fichiers externes. 
Le comportement par défaut est d'utiliser HandlebarsLoader au lancement de son application; mais rien n'empêche de faire plusieurs fois appel au loader.

Cette librairie a été réécrite récemment en CoffeeScript et rendu disponible dans le gestionnaire de paquet `bower`

## Installation

```bash
bower install handlebars-loader  
```

## Utilisation

### Import de la librairie

Il suffit d'ajouter l'import de la librairie (et de ses dépendances).

```html
<script src="./vendors/jquery.js"></script>  
<script src="./vendors/underscore.js"></script>  
<script src="./vendors/handlebars.js"></script>  
<script src="./vendors/HandlebarsLoader.js"></script>  
```

### Chargement de templates et de partials

Dans le cas présent, nous chargeons 3 templates et 1 partial.

```javascript
var loader = new HandlebarsLoader();  
loader.load([  
        'template1', 
        'template2',
        'template3'
    ], 
    [         
        'partial1'
    ],  
    function() {   
        // templates are available...
    }
);
```

### Utilisation des templates

```javascript
loader.getTemplate('template1')();  
```

ou encore

```javascript
loader.getTemplate('template2')({foo:'bar'});  
```

### Récupération de tous les templates

```javascript
var templateContainer = loader.getAllTemplates();  
templateContainer.template1();  
templateContainer.template2({foo: 'bar'});  
```

## Configuration

Plusieurs options sont disponibles afin de changer l'emplacement par défaut et les extensions des fichiers à charger. Ces options sont définies dans le [projet GitHub](https://github.com/cbourgois/HandlebarsLoader/blob/master/README.md).

## Conclusion

Le code est dispo sur [GitHub](https://github.com/cbourgois/HandlebarsLoader), avec un beau makefile pour compiler.
