# Grid
CSS Grid Layout is a two dimensional layout system that utilizes both columns and rows for placing HTML elements and setting their flow inside a container.

# How to use Grid

* parent
    * `display: grid`
    * `grid-template-columns`
    * `grid-template-rows`
* child
    * `grid-column`
    * `grid-row`

# Properties for the Parent (Grid Container)

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

# Properties for the Children (Grid Items)

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

# [HTML File](/code/grid.html)
# [CSS File](/code/grid.css)