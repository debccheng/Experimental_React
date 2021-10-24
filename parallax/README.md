# Parallax scrolling
* Explored parallax scrolling after reading [parallax scrolling in web design](https://www.tutorialspoint.com/parallax_scrolling_in_web_design/index.htm).
* Created HOC `withParallax` to wrap page of interest and pass down `offsetY` to children components.
* `transform: translateY(offsetY * [factor]px)` is used to manipulate scrolling speed of certain components to create parallax effect.
* Considerations if implemented in a real web app:
  * Layout planning - moving components can be confusing to the user if not executed well
  * Page speed
  * Smooth scrolling
  * Mobile view

# Demo
![Kapture 2021-10-24 at 17 22 22](https://user-images.githubusercontent.com/47295273/138583371-d2bfef46-b4e4-48a6-8678-5e892ae6311d.gif)
