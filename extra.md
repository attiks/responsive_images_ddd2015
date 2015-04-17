### When to use sizes breakpoints

Device pixel ratio (dpi case)

```
<picture>
  <source srcset="small.jpg, med.jpg 2x, high.jpg 3x">
  <img srcset="small.jpg" alt="Fallback image">
</picture>
```


Viewport-based (sizes)

```
<picture>
  <source sizes="100vw" srcset="small.jpg 400w, med.jpg 600w, high.jpg 800w">
  <img srcset="small.jpg" alt="Fallback image">
</picture>
```


Art direction case

```
<picture>
  <source media="(min-width: 45em)" srcset="large.jpg">
  <source media="(min-width: 32em)" srcset="med.jpg">
  <img srcset="small.jpg" alt="Fallback image">
</picture>
```


Use css to avoid reflow

```
img { 
  width: 300px;
  height: 300px
}
@media (min-width: 32em) {
  img {
    width: 500px;
    height:300px;
  }
}
@media (min-width: 45em) {
  img {
    width: 700px;
    height:400px;
  }
}
```

Note:
Another solution is being investigated, but most proposals are way to complex.  
I proposed added width and height on the source tag.  
Link to github issues ...


### Empty and original image

Besides mapping to image style you can link to an empty or the original image.

Note:
The empty image option allows you to *hide* an image.  
The original can be usefull as fallback.


### Use of different mime types

- Picture allows you to mix mime types like png, jpg and webP. <!-- .element: class="fragment" -->
- But Drupal 8 core only support png, jpg and gif <!-- .element: class="fragment" -->



## Output

In Drupal 8 the output is always going to be a *picture* tag, could be
optimized in Drupal 8.1 to output *img* tag with *srcset* if possible.


## WYSIWYG

- No support in Drupal 8 core <!-- .element: class="fragment" -->
- Does exist in Drupal 7 <!-- .element: class="fragment" -->



## Demo time

```
<picture>
  <source src="http://d8.pd.2qbs.com/sites/default/files/styles/thumbnail/public/field/image/14593543873_44867d3ec2_b.jpg?itok=-D2evfU1" width="100" height="65">
  <source media="(min-width: 0px)" src="http://d8.pd.2qbs.com/sites/default/files/styles/thumbnail/public/field/image/14593543873_44867d3ec2_b.jpg?itok=-D2evfU1" width="100" height="65">
  <source media="all and (min-width: 560px) and (max-width: 850px)" src="http://d8.pd.2qbs.com/sites/default/files/styles/medium/public/field/image/14593543873_44867d3ec2_b.jpg?itok=0j7brOD0" width="220" height="143">
  <source media="all and (min-width: 851px)" src="http://d8.pd.2qbs.com/sites/default/files/styles/large/public/field/image/14593543873_44867d3ec2_b.jpg?itok=NzJHCjzY" width="480" height="313">
  <img alt="null" src="http://d8.pd.2qbs.com/sites/default/files/styles/large/public/field/image/14593543873_44867d3ec2_b.jpg?itok=NzJHCjzY" width="480" height="313">
</picture>
```
