---
title: Où sont les Vlilles ?
image: https://images.unsplash.com/photo-1455641374154-422f32e234cd
publish: 2012-08-14
type: post
tags:
  - javascript
  - dataviz
  - javascript
categories:
  - code
  - opensource
readingTime: 5 Minutes
---

# Où sont les Vlilles ?

Suite à la lecture de l'article [Où sont les Vélibs ?](http://svay.com/blog/ou-sont-les-velibs/) de Maurice Svay, j'ai décidé de représenter les mouvements des vélos dans la région lilloise pendant 24 heures. 
Les données utilisées ont été récupérées d'une manière assez simple à partir du site [VLille](http://vlille.fr/), que je ne détaillerai pas ici, et ce toutes les 10 minutes. 
Les données ont été collectées le samedi 11 août 2012, journée où il a fait particulièrement beau (l'été n'étant pas trés réussi dans la région).

[Voir la Démo](/vlille/index.html)

## Exploitation

### Ce que l'on peut en déduire:

* peu d'activités dans la zone Roubaix/Tourcoing
* à partir du milieu de matinée, les vélos sont utilisés pour se rendre dans le centre lillois: c'est là qu'on trouve le plus grands nombres de restaurants avec terrasses.
* beaucoup de vlilles dans le centre de lille durant l'après midi

### Ce que l'on ne peut pas déduire:

* la durée d'utilisation des vlilles
* le parcours d'un utilisateur vlille

### A prendre en compte:

Il y aurait des navette chargés de circuler entre les stations afin de répartir les vlilles en cas de stations vides/pleines…

## Quelques chiffres sur la journée
* 3560 bornes vlille au total
* 1516 vlilles disponibles en moyenne
    * 1597 au maximum
    * 1379 au minimum

## Techniquement, qu'est-ce que c'est ?

Je me suis inspiré du développement de Maurice Svay, auquel j'ai ajouté quelques petites fonctionnalités, nottament la lecture automatique depuis le début de journée et l'affichage du nombre de vlilles disponibles.