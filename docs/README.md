# Designers’ Guide

The KAP Legend System is a versatile and modern set of keycap legends in the
cylindrical ‘Cherry’ keycap profile for creating doubleshot keycaps, designed by
[kapowaz][kapowaz] and manufactured by [Keyreative][keyreative]. This Designers’
Guide is for anyone who is interested in creating and selling keycap sets using
these legends.

- [Available Resources](#available-resources)
  - [Kit Templates](#kit-templates)
  - [Packaging Templates](#packaging-templates)
  - [Modifier Lettering](#modifier-lettering)
  - [UV Legend Sheets](#uv-legend-sheets)
- [Core Concepts](#core-concepts)
  - [Kit selection](#kit-selection)
  - [Colors](#colors)
- [Custom kits](#custom-kits)
  - [Tolerances](#tolerances)
    - [Line Width](#line-width)
    - [R-angle](#r-angle)
    - [Interval](#interval)
    - [Enclosed area](#enclosed-area)
    - [Icon area](#icon-area)
    - [Safe zone](#safe-zone)
  - [Custom legends](#custom-legends)
  - [Custom Icons](#custom-icons)
- [Blender and Keyboard Render Kit](#blender-and-keyboard-render-kit)

## Available Resources

This repository has two main purposes:

1. Provides a ‘source of truth’ for the original production-ready design files
2. Provide keycap designers with templates and other resources to design keycap
  sets

Designers creating their own keycap sets based on the KAP Legend System should
mostly focus on the files within the `Designer Resources/` section of the
repository, which include:

* Documentation (i.e. this guide)
* Kit templates
* Packaging templates
* Modifier key legend lettering templates
* UV texture maps (i.e. for use with [Keyboard Render Kit][krk])

In addition to this GitHub repository, there is also a [Google
Drive][google-drive] containing the keycap CAD files, both as STEP format, and
converted for Blender (suitable for use with [Keyboard Render
Kit](#blender-and-keyboard-render-kit), which is discussed further down).

### Kit Templates

![Base Kit](images/base-kit-color.png)

There are two basic template files available within the Designer Resources that
you can use as a basis for creating production-ready design files:

* [Color Previews.pdf][color-previews]
* [Default Kits.pdf][default-kits]

Each of these files contains an artboard for each of the default kits already
available. The process for using these to then create your sets is discussed in
more depth below, in the section [Core concepts](#core-concepts).

### Packaging Templates

![Box Art Small](images/box-art-small.png)

Keyreative makes use of two sizes of boxes for their keycap trays once shipped,
and as such there are two packaging templates for the small and large sizes
respectively, which can be found in the Designer Resources.

* [Box Art Large.pdf][box-art-large]
* [Box Art Small.pdf][box-art-small]

The packaging templates (as well as the kit templates) make use of the Inter
typeface, which can be [downloaded here][inter-font]. You are free to design
whatever packaging makes sense for your keycap set, but don’t feel you need to
overthink it: the default packaging template is designed to let you create
something that feels part of the KAP Legend System family without much effort,
so that customers can readily recognise sets using the same legends.

### Modifier Lettering

![Modifier Lettering](images/modifier-lettering.png)

The file [Modifier Legend Lettering.pdf][modifier-legend-lettering] contains all
of the lettering used to create modifier key legends. These are heavily-modified
versions of the original letterforms, to ensure that any modifier legends using
them meet the required production constraints for tolerances etc. Using these is
discussed in more depth in the section on [custom legends](#custom-legends).

### UV Legend Sheets

![KRK Texture](images/krk-texture.png)

If you’re using [Keyboard Render Kit][krk], you can use these instead of the
default legends to quickly create sample renders for your designs. You can find
these (in much higher resolution than the example above) [here][krk-legends].

## Core Concepts

There are at present nearly 400 individual keycap legends available in the KAP
Legend System (when including the same legend appearing at different keycap
sizes, and on different rows). This means whilst the system is incredibly
versatile and flexible, it can also be a little overwhelming for a designer
setting out to make a keycap set.

To simplify the process of picking which legends to use, we have created several
template kits with support for a range of common keyboard layouts, as well as
child kits with support for more esoteric layouts, novelties and other customer
personalisation.

You can find PDF files containing all of these kits in two forms: [Color
Previews.pdf][color-previews], which contains each kit in a form suitable for
providing physical color information, and [Default Kits.pdf][default-kits],
which contains a more schematic-like layout of each kit, indicating safe zones
etc.

To create a custom keycap project with everything needed to get it into
production and put on sale there are essentially two major components you need
to decide on:

1. Which kits to offer
2. What colors to use in your set

There are potentially other decisions to make and other design files to produce
(such as artwork for novelty keys, and packaging), but these two are the main
elements of any project.

### Kit selection

![Base Kit](images/base-kit.png)

There are three* generic base kits in this repository (each of which has support
for ANSI and ISO-UK layouts):

* `Base Kit` — using the default icon & text legend modifiers
* `Base Kit (Text Modifiers)` — using text-only modifiers
* `Base Kit (Icon Modifiers)` — using icon-only modifiers

<small>*An additional `Base Kit (German)` layout exists, with kitting explicitly
intended for German keyboard layouts; it is however not suitable for most
projects, unless you are specifically targeting the German market.</small>

Unless you have specific layouts in mind that require changing the kitting, we
recommend you choose one of these three default base kits as your base kit, and
add support for additional layouts via child kits. To that end, we also provide
the following generic child kits:

* `40s Kit` — additional support for ergo, ortholinear and 40% keyboard layouts
* `Icon Alternates Kit` — additional icon-only versions of 1u-size modifier keys
  (e.g. paging keys) to complement a text-only base kit
* `Icon Modifiers Kit` — a set of alternative icon-only modifiers to complement
  either the default icon & text, or text-only base kits
* `Text Modifiers Kit` — a set of alternative text-only modifiers to complement
  either the default icon & text, or icon-only base kits
* `NorDe Kit` — additional language support for Nordic & German layouts
* `Mac Kit` — additional modifiers and alternate Function row keys to support
  Mac layouts
* `French Kit` — additional language support for French (France) and French
  (Belgium) layouts
* `Spanish Kit` — additional language support for Spanish (Spain) and Spanish
  (Latin America) layouts

Each of these kit diagrams can be found (on a separate artboard) within the file
[Default Kits.pdf][default-kits].

### Colors

The kit templates follow a very particular format, intended to provide engineers
and production managers at Keyreative with all the necessary information they
need to manufacture the product, specifically:

* Which legends are used?
* …on which sized keycaps?
* …for which row profile?
* …and in which color?

Conceptually, the generic kits have three different color of keycap: _Alpha_,
_Modifier_ and _Accent_; each of these then has two colors (one for the
_legend_, and one for the _base_), for a hypothetical total of six colors.

The kit templates use another three other colors to represent important
information: _magenta_, to indicate the top edge of the keycap surface; _cyan_
to represent the ‘safe area’ for the legend, and _blue_ for labels indicating
keycap size. A list is provided on each template to illustrate these colors:

<p align="center">
  <img src="images/production-color-key.png" alt="Production color key" width="189" height="283">
</p>

The templates provided in the Designer Resources don’t specify any _physical
colors_ to use for each of these named values; this is up to the keycap designer
to decide. You could also choose to use the same color for two or more of them
(for example, you might not use a different color scheme for accents or
modifiers, and simply use the same color as alpha keys).

The [safe zone](#safe-zone) line is an important concept should you decide to
create [custom legends](#custom-legends), and is discussed later on.

## Custom kits

If you want to create your own custom kit, either using new legends (such as
novelties), or by combining other existing legends, you can do so using the
existing template.

To add existing keys to your kit, you should navigate within the GitHub
repository to the [`Keys/`][keys] folder, where you can find legends saved as SVG files,
grouped by row (N.B. Keyreative follows the Chinese manufacturing convention of
numbering rows from the bottom up, so the spacebar is R1, and number row is R4).

If you’re creating entirely new, custom legends to use within your set, you
should ensure that your design follows the below requirements.

### Tolerances

When creating custom legends, you must observe certain tolerance values to
ensure that the design can actually be physically manufactured. There are five
key metrics which are of significance here:

1. **Line width** — the width of individual strokes on letters or icons
2. **R-angle** — the smallest possible radius of _internal_ corners within a
   legend
3. **Interval** — the gap between individual stroked or filled elements within a
   legend
4. **Enclosed area** — the size of any internal gaps within legends, e.g. the
   centre of a letter O
5. **Icon area** — the relative proportion of the keycap legend that is filled

#### Line width

<p align="center">
  <img src="images/tolerance-line-width.png" alt="Line width tolerance" width="280" height="160">
</p>

* Ideal: `>0.5mm`
* Good: `>0.32mm`
* Difficult `>0.22mm`

Stroke widths below `0.22mm` in thickness might be possible, but should be
avoided.

#### R-angle

<p align="center">
  <img src="images/tolerance-r-angle.png" alt="R-angle tolerance" width="280" height="160">
</p>

This metric concerns the sharpness of any internal corners on your legend. It is
best visualised as the corner radius on a sharp point in mm. You can test this
in design tools by checking if a circle with the desired radius can fit snugly
inside the internal corner, covering the whole area the corner extends into.

* Ideal: `>0.6mm`
* Good: `>0.3mm`
* Difficult: `>0.1mm`

Corner radii below `0.1mm` should be avoided.

#### Interval

<p align="center">
  <img src="images/tolerance-interval.png" alt="Interval tolerance" width="280" height="160">
</p>

Similar to line width, this is a simple metric for the gap between filled areas
within a legend.

* Good: `>0.5mm`
* Difficult: `>0.3mm`

Interval gaps of below `0.3mm` between filled areas should be avoided.

#### Enclosed area

<p align="center">
  <img src="images/tolerance-enclosed-area.png" alt="Enclosed area tolerance" width="280" height="160">
</p>

To ensure legend molds can be manufactured, the size of non-filled, enclosed
areas should be limited to above a certain size.

* Ideal: `>1mm`
* Good: `>0.5mm`
* Difficult: `>0.25mm`

Enclosed areas below `0.25mm` wide between filled areas should be avoided.

#### Icon area

<p align="center">
  <img src="images/tolerance-icon-area.png" alt="Icon area tolerance" width="280" height="160">
</p>


This relates to the relative proportion of the keycap legend that is filled
compared to the base keycap color.

* Ideal: `<10%`
* Good: `<60%`
* Difficult: `<80%`

#### Safe zone

<p align="center">
  <img src="images/tolerance-safe-area.png" alt="Safe area tolerance" width="280" height="160">
</p>

As well as tolerance constraints, custom legends must be a safe distance from
the edge of the keycap top surface. To that end, there is a visible ‘safe zone’
indicated in cyan on keycap templates. When creating custom legends you must
ensure that your legend is no closer than `0.3mm` to this line (in Illustrator,
setting a stroke of `0.6mm` on that outline will allow you to visualise this
distance).

### Custom legends

<p align="center">
  <img src="images/custom-modifier.png" alt="An example custom modifier" width="480" height="360">
</p>

If you wish to include a new modifier legend that includes text, refer to the
file [Modifier Legend Lettering.pdf][modifier-legend-lettering] which contains
the adjusted letterforms for modifier legends; these letters have all been
tweaked to ensure they meet tolerance requirements. The template contains each
letter on a common baseline, so you can manually assemble these letters provided
they remain on this same baseline and you follow the tolerance requirements for
[legend intervals](#interval).

If you need any assistance in creating a modifier legend for a key, reach out to
us and we can assist.

### Custom Icons

The default icons used in KAP Legend System for modifier keys follow a set of
conventions to ensure they all look like they’re part of the same family. We
recommend following the same conventions when you create custom icons for your
sets, to help them feel ‘at home’ when used alongside other KAP Legend System
keycaps, as well as (potentially) allow for their re-use in other keycap sets.

<p align="center">
  <img src="images/icon-examples.png" alt="Some example icons from KAP Legend System" width="496" height="344">
</p>

If you’re creating something completely custom (e.g. for a novelty) you can
disregard these rules, but if you are creating modifier keys that combine icon
plus text (as per the default legends), then following them will help you create
something that is visually cohesive with the rest of the KAP Legend System.

#### Icon canvas

<p align="center">
  <img src="images/icon-canvas.png" alt="Icon canvas area" width="280" height="160">
</p>

Icons should sit within a `6.35mm × 6.35mm` bounding box, and ideally no
elements of the icon should leave this area. To ensure icons have a similar
‘optical size’, you shouldn’t try to fill this space, but rather look for other
icons that have a similar silhouette to yours as a guide for sizing.

#### Stroke widths

<p align="center">
  <img src="images/icon-stroke.png" alt="An icon with a " width="350" height="250">
</p>

Stroked lines that form part of an icon should have a stroke width of `0.5mm`.
For corners on (for example) rectangles, these should have a border radius of
`0.5mm`; this ensures that corners will be appropriately rounded, without sharp
interior edges that are difficult to create molds from.

For other corners (for example the cross in the Delete symbol) ensure that these
have an external border radius of `0.05mm`, which will again help avoid sharp
edges.

## Blender and Keyboard Render Kit

An extensive guide on how to use KAP Legend System with Blender and [Keyboard
Render Kit][krk] is beyond the scope of this guide; however, if you are
comfortable using these tools, you can can add the [aforementioned UV
textures](#uv-legend-sheets) from [`Designer Resources/KRK/`][krk-legends] to an
existing KRK Blender file to replace the existing legends, or you can import the
3D models available in the [Google Drive][google-drive]; the latter contain
separate geometry for each shot, allowing you to render doubleshot keycaps with
(for example) transparent materials.

[kapowaz]: https://kapowaz.industries
[keyreative]: https://keyreative.store
[google-drive]: https://drive.google.com/drive/folders/1kV-D5MELIa8oaznFhoh9b9LvV5FcjUj3
[krk]: https://keyboardrenderkit.readthedocs.io/
[krk-legends]: https://github.com/kapowaz/kap-legends/blob/main/Designer%20Resources/KRK/
[keys]: https://github.com/kapowaz/kap-legends/blob/main/Production%20Files/Keys
[color-previews]: https://github.com/kapowaz/kap-legends/blob/main/Designer%20Resources/Templates/Color%20Previews.pdf
[default-kits]: https://github.com/kapowaz/kap-legends/blob/main/Designer%20Resources/Templates/Default%20Kits.pdf
[modifier-legend-lettering]: https://github.com/kapowaz/kap-legends/blob/main/Designer%20Resources/Templates/Modifier%20Legend%20Lettering.pdf
[box-art-large]: https://github.com/kapowaz/kap-legends/blob/main/Designer%20Resources/Templates/Box%20Art%20Large.pdf
[box-art-small]: https://github.com/kapowaz/kap-legends/blob/main/Designer%20Resources/Templates/Box%20Art%20Small.pdf
[inter-font]: https://rsms.me/inter/
