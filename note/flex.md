# Flex
Flexbox, short for Flexible Box Layout, is a one-dimensional layout method for aligning and distributing space among items in a container.

* **Flex Container**: The parent element that holds flex items.
* **Flex Items**: The child elements within the flex container. 
* **Main Axis**: The primary axis along which the flex items are laid out (typically left-to-right or top-to-bottom).
* **Cross Axis**: Perpendicular to the main axis, determining the vertical or horizontal alignment of the items.

# Properties for the Parent (flex container)
* `display` - define a Flex Container
* `flex-flow` - shorthand for flex-direction & flex-wrap
    * `flex-direction` - set main axis of flex items
    * `flex-wrap` - set multiple line breaks for flex items
* alignment
    * `justify-content` - specifies how flex items are aligned along the main axis
    * `align-content` - sets the margin between items in the container based on the cross axis (when flex-wrap is set & multiple lines are created)
    * `align-items` - align each item (all) within a flex container along the cross-axis
* `gap` - shorthand for row-gap & column-gap
    * `row-gap`
    * `column-gap`


# Properties for the Children (flex items)

* alignment
    * `align-self` - specify alignment of individual items (single) on cross-axis
* `order` - sets order of items
* `flex` - shorthand for flex-grow, flex-shrink & flex-basis
    * `flex-grow` - determines how much of remaining space flex item will fill
    * `flex-shrink` - determines how much flex items can shrink when flex container runs out of space
    * `flex-basis` - sets initial size of item (before space allocation) on the main axis

# [Code](/code/flex.css)