---
layout:     post
title:      A post with maths
date:       2020-11-28 
summary:    Beautiful maths in the post
---


this is my new post $$ x^2 + y^2 = 3 $$

$$ x^2 + y^2 = 2 $$

$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$



i learned all this in {% cite ortiz2019proximal %}

## References

TODO: redefine the style here!

{% bibliography --cited %}

