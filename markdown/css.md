**INDEX**
Flex, Grid

# [Flex](/coding/flex.css)
Flexbox, short for Flexible Box Layout, is a one-dimensional layout method for aligning and distributing space among items in a container.
* **Flex Container**: The parent element that holds flex items.
* **Flex Items**: The child elements within the flex container. 
* **Main Axis**: The primary axis along which the flex items are laid out (typically left-to-right or top-to-bottom).
* **Cross Axis**: Perpendicular to the main axis, determining the vertical or horizontal alignment of the items.

### Properties for the Parent (flex container)
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

### Properties for the Children (flex items)
* alignment
    * `align-self` - specify alignment of individual items (single) on cross-axis
* `order` - sets order of items
* `flex` - shorthand for flex-grow, flex-shrink & flex-basis
    * `flex-grow` - determines how much of remaining space flex item will fill
    * `flex-shrink` - determines how much flex items can shrink when flex container runs out of space
    * `flex-basis` - sets initial size of item (before space allocation) on the main axis

# [Grid](/coding/grid.css)
CSS Grid Layout is a two dimensional layout system that utilizes both columns and rows for placing HTML elements and setting their flow inside a container.

### How to use Grid
* parent
    * `display: grid`
    * `grid-template-columns`
    * `grid-template-rows`
* child
    * `grid-column`
    * `grid-row`

### Properties for the Parent (Grid Container)
* `display` - define a grid container
* `grid-template` - shorthand to define grid columns, rows and areas.
    * `grid-template-columns`
    * `grid-template-rows`
    * `grid-template-areas` - define and name the cells.
* `gap` - shorthand for column gap & row gap
    * `column-gap`
    * `row-gap`
* `place-items` - shorthand for align-items & justify-items
    * `justify-items` - align grid items horizontally (row axis)
    * `align-items` - align grid items vertically (column axis)
* `place-content` - shorthand for align-content & justify-content
    * `justify-content` - align grid content horizontally (row axis)
    * `align-content` - align grid contents vertically (column axis)
* `grid` - shorthand for grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, and grid-auto-flow.
    * `grid-auto-columns`
    * `grid-auto-rows`
    * `grid-auto-flow`

### Properties for the Children (Grid Items)
* `grid-area` - shorthand for grid row & grid column
    * `grid-column` - shorthand for grid column start/end
        * `grid-column-start`
        * `grid-column-end`
    * `grid-row` - shorthand for grid row start/end
        * `grid-row-start`
        * `grid-row-end`
* `place-self` - shorthand for align-self & justify-self
    * `align-self` - align a single grid item vertically (column axis)
    * `justify-self` - align a single grid item horizontally (row axis)
* order of grid items
    * `order` - specifies the order of grid items
    * `z-index` - specifies the stacking order of grid items