# Flex
Flexbox, short for Flexible Box Layout, is a one-dimensional layout method for aligning and distributing space among items in a container.

* **Flex Container**: The parent element that holds flex items.
* **Flex Items**: The child elements within the flex container. 
* **Main Axis**: The primary axis along which the flex items are laid out (typically left-to-right or top-to-bottom).
* **Cross Axis**: Perpendicular to the main axis, determining the vertical or horizontal alignment of the items.

# Flex Properties

* flex container
    * `display`
    * `flex-direction`
    * `flex-wrap`
    * `justify-content`
    * `align-items`
    * `align-content`
    * `order`
    * `flex-grow`
    * `flex-shrink`
    * `flex-basis`
    * `flex`
    * `align-self`

# Remember

* align-content will work:
    * flex container must have wrap property applied
    * height of flex container should exceed height of flex item's line.

# [Code](/code/flex.css)

# Visual Presentation

| ![flex layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox/flex_terms.png) | ![display](https://i.sstatic.net/mns2H.jpg) | ![flex direction](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F4jkkaafn2ef4osrtmhyg.png) |
| -------- | ------- | ------- |
| ![flex wrap](https://miro.medium.com/v2/resize:fit:1400/1*kA8UU3jO8WZ88jgwnCaUhQ.png) | ![justify content row](https://velog.velcdn.com/images/syub98774/post/c592dd07-98a3-4553-86e5-b7c592876697/image.png) | ![justify content column](https://pbs.twimg.com/media/EEcjUNKVUAAeLCE.jpg:large) |
| ![align content](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*YbXBsj4GhbK7wiBmew6Ywg.png) | ![align items](https://miro.medium.com/v2/resize:fit:1400/1*UzqeMowKX_wWTyEWiRhC8g.png) | ![align item vs content](https://cdn.answeroverflow.com/1162108018788417669/image.png) |
| ![order](https://miro.medium.com/v2/resize:fit:1400/1*BdoGsWOIFJ3IGW7j193W2Q.png) | ![flex grow](https://labs.coderschool.vn/codelabs/wv-m11-css-flexbox/img/9cdcfd443113478.png) | ![flex shrink](https://steam.oxxostudio.tw/webp/css/content/flexbox-flex-06.webp) |
| ![flex basis](https://webukatu.com/wordpress/wp-content/uploads/2020/12/2020-12-19_08h56_06.png) | ![flex shorthand](https://pbs.twimg.com/media/FVw85xJXwAMcSc7.jpg) | ![align self](https://pbs.twimg.com/media/FNztTE5VQAAqms9.png) |