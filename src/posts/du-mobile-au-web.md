---
title: Du mobile au web
image: https://images.unsplash.com/photo-1508872558182-ffc7f1b387f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80
publish: 2012-12-27
type: post
tags:
  - javascript
  - github
  - bower
  - handlebars
categories:
  - code
  - opensource
readingTime: 15 Minutes
---

# Du mobile au web

> Cet article a été écrit et publié dans le cadre des [24 jours de web](https://www.24joursdeweb.fr/2012/), au profit de l'association L'abri. Vous pouvez soutenir cette association en faisant [un don](https://www.laubergedesmigrants.fr/fr/faire-un-don/).

<!-- more -->

Nous allons voir aujourd'hui comment nous pouvons réutiliser nos développements entre une application mobile et une application web.


Cordova permet de créer des applications natives (disponibles dans les différents stores) avec des technologies web (HTML+CSS et JavaScript). Cordova propose une API qui vous permet d'accéder aux fonctionnalités natives de la plateforme d'exécution de votre application (iOS, Android…). Pour exemple voici une petite liste des fonctionnalités supportées par Cordova : Compas, Accéléromètre, Contacts… ([voir la documentation de Cordova](http://docs.phonegap.com/en/2.2.0/index.html) pour plus de détails). Apache Cordova est anciennement connu sous le nom de Apache Callback (nom donné lors de l'ajout dans l'incubateur Apache), et plus anciennement sous le nom de PhoneGap (développé à l'origine par Nitobi Software, puis racheté par Adobe).

Pour faire simple, Cordova résume votre application à une WebView qui charge vos fichiers HTML. Cette WebView est agrémentée de fonctions JavaScript à travers une API qui vous permettent d'utiliser des fonctionnalités natives.

## Une application mobile

Afin de développer une application mobile dynamique avec Cordova, il faut donc développer en JavaScript. Plusieurs frameworks MVC existent : EmberJS, BackboneJS, etc. Là, c'est à la convenance de chacun (si vous souhaitez comparer différents frameworks dans un même contexte, je vous invite à consulter [todoMVC](http://todomvc.com/) qui implémente la même application avec différents frameworks). Il est aussi possible de tirer profit des fonctionnalités proposées par l'API HTML5 (localstorage…).

Une fois la dynamique de votre application mise en place (changements d'écrans, formulaires) il vous faut faire communiquer votre application avec l'extérieur, la faire communiquer avec votre serveur.

Pour cela vous avez plusieurs possibilités :

1. mettre en place de simples scripts PHP qui retournent du texte, de l’XML ;
2. développer une API. 

La première solution peut s'avérer rapide et simple à mettre en place, mais n'est pas vraiment standardisée, et pourra être difficile à maintenir.
La mise en place d'une API peut s'avérer un peu plus longue, car il vous faut réfléchir un minimum au préalable sur les ressources que vous voulez exposer. Mais, en mettant en place une API et en la documentant, vous pourrez offrir l'accès à votre système et ainsi l'ouvrir aux développeurs.

*Aparté — Je vous invite à lire « [REST API Design Rulebook](http://shop.oreilly.com/product/0636920021575.do) » de Mark Massé, ainsi qu’à lire quelques sujets sur [api-craft](https://groups.google.com/forum/?fromgroups#!forum/api-craft) ou à vous rendre au premier événement international dédié aux API en Europe : [API Days](http://apidays.io/) (ou suivre les retours des keynotes).*

Lors de vos développements, il est donc possible d'utiliser les fonctionnalités natives proposées par Cordova. Voici un exemple d'utilisation de l'Accéléromètre :


```js
function onSuccess(acceleration) {  
     alert(
         'Acceleration X: ' + acceleration.x + '\n' +
         'Acceleration Y: ' + acceleration.y + '\n' +
         'Acceleration Z: ' + acceleration.z + '\n' +
         'Timestamp: ' + acceleration.timestamp + '\n'
     );
};

function onError() {  
    alert('onError!');
};

navigator.accelerometer.getCurrentAcceleration(onSuccess, onError); 
```
 
Il est aussi possible que vous rencontriez un problème : la fonctionnalité que vous souhaitez utiliser n'est pas supportée par Cordova, il vous est alors possible de vous orienter vers le développement d'un plugin (de nombreux plugins existent sur [gitHub](https://github.com/phonegap/phonegap-plugins)). Pour exemple vous pourrez lire l'article d'Andrew Trice sur la [gestion du multi-écrans sous iOS](http://www.tricedesigns.com/2012/01/12/multi-screen-ios-apps-with-phonegap).

Attention, si vous envisagez le développement d'un plugin, n'oubliez pas qu'un plugin est codé dans le langage de référence de la plateforme et est propre à celle-ci : il vous faudra développer un plugin par système d'exploitation (avec des langages différents : ObjectiveC pour iOS, Java pour Android, etc.). 
Si vous souhaitez proposer une application universelle (compatible smartphone et tablette), il vous faut cibler plusieurs tailles d'écran. Comme Cordova utilise les technologies web il vous est possible d'utiliser les medias queries CSS3 afin de proposer une mise en page responsive ! Je ne vous expliquerai pas comment les mettre en place, mais sélectionnez et ciblez plusieurs résolutions d'écran que vous voulez supporter (tablette, minitablette, smartphone…) et écrivez vos règles CSS en fonction.

Petite astuce pour débuguer votre application : il existe maintenant [Adobe Edge Inspect](http://html.adobe.com/edge/inspect/) qui permet de tester votre application directement dans plusieurs navigateurs, c'est une bonne solution mais ça ne permet pas de tester vos développements packagés avec Cordova. Pour accéder à une console JavaScript et un inspecteur HTML dans une application Cordova, je vous conseille donc de vous orienter vers Weinre. Son installation est assez simple et donc utilisation l'est tout autant : il vous suffit de placer un appel à un fichier JavaScript présent sur le serveur [Weinre](http://people.apache.org/~pmuellr/weinre/docs/latest/) dans votre code d'application et le tour est joué.

Maintenant que vous avez une application mobile développée en JavaScript, HTML et CSS (responsive), le tout packagé avec Cordova et qui communique avec votre système via une API, nous pouvons faire un constat : cela ressemble vraiment à une application web. Et si justement on utilisait les développements de l'application mobile pour en faire notre application web ?

## Une application web

La première chose à faire est de différencier au sein des développements les parties développées pour le mobile et nécessitant Cordova. Il suffit d'encadrer chacun des développements qui nécessitent Cordova d'un :

```javascript
if ( window.PhoneGap || window.cordova || window.Cordova ) {  
    // votre code nécessitant Cordova
}
else {  
    // fallback desktop
}
```

Vous pouvez également créer une variable spécifique auprès de votre application :

```javascript
app.canUseCordova = ( window.PhoneGap || window.cordova || window.Cordova );  
if ( app.canUseCordova ) {  
    // votre code nécessitant Cordova
}
else {  
    // fallback desktop
}
```

Une fois ces développements modifiés, vous pouvez exécuter votre application directement dans un navigateur web, mais il reste encore un peu de travail.

Visuellement, il faut que votre application web ressemble à un site et non une application mobile : étendez les medias queries de votre mise en page responsive pour supporter de nouvelles résolutions d'écran.

Au niveau des fonctionnalités que vous souhaitez proposer, c'est à vous de définir quels sont les usages que l'on attend sur l'application mobile et l'application web. Pour limiter des comportements, des fonctionnalités, vous pouvez utiliser la variable `app.canUseCordova` qui a été créée pour cibler uniquement les applications mobiles ou l'application web. Généralement l'application mobile permet de faire moins de choses que l'application web, je dis bien généralement car il est tout à fait envisageable de proposer l'ensemble des fonctionnalités, le tout étant de proposer une interface simple et agréable à utiliser, et que ces fonctionnalités aient un intérêt pour l'utilisateur mobile.

Enfin, si vous souhaitez optimiser votre référencement, il vous faudra mettre en place un moteur de SEO alternatif afin de faire croire aux moteurs de référencement que votre site existe comme un ensemble de pages HTML. Attention, il faut bien prendre en compte que les moteurs vont référencer des pages HTML, et que lorsqu'un internaute accédera à une page référencée, vous devrez le rediriger vers le contenu correspondant dans votre application full JavaScript (si vous optez pour l'utilisation de l’History API HTML5, vos URL sont déjà toutes prêtes).

Pour résumer, il est possible de faire coexister au sein d'un même développement plusieurs applications (web et mobile), tout en utilisant des technologies que nous connaissons. Bien entendu, cette fusion entre applications n'est pas forcément adaptée à vos projets et n'est donc à prendre qu'à titre d'exemple.
