---
layout: page
title: Tools
---

<!-- My research in music technology is inherently tied to my compositional work. Through my use of Max/MSP and SuperCollider, I create compositional and analytical tools that serve the needs of my creative projects.  -->

Below you can find a selection of recent tools that I have developed for compositional and analytical projects. Some of these are still in active development, so be aware there may be bugs or idiosyncrasies in functionality. There are links to download some of the tools, and all that I ask is that you let me know if you find them useful and please give attribution if you repurpose some of my work in your own. Please be in touch if you find any bugs.

## Generative Sound File Player

<img src="{{ site.baseurl }}/assets/img/gsfp1.png" class="img-fluid" alt="Screenshot of GSFP">

The Generative Sound File Player is my most recent tool that allows for the algorithmic sound file playback with controls for real-time manipulation. One can load up and sequence any number of sound files using a variety of parameters, which you can see on the interface screenshot above. Currently, the controls to interact with the GSFP are text-based but the organization of the software will allow for easy implementation of graphic control (through user interface objects or touch-based controllers) in the near future.

The functionality of the parameters in the image above are:

- `wait time:` the duration of time (in milliseconds) between the onsets of the GSFP being triggered
- `density:` the number of "notes" or sound files to be triggered at the moment of an onset
- `delta:` the time variation (in milliseconds) between note onsets (ie., the onset of the GFSP triggers 5 sounds, they can all happen at once with a delta of 0 or be displaced in time from one another)
- `buffers:` the buffer names of sounds to use (folders of sounds can also be loaded with the keyword `key`)
- `amp:` amplitude levels of sound file playback
- `attack time:` the duration of the envelope's attack (in milliseconds)
- `attack curve:` the slope or curve of the envelope's attack (in milliseconds (positive values give a logarithmic curve, negative values give an exponential curve, and zero gives a linear ramp)
- `release time:` the duration of the envelope's release (in milliseconds)
- `release curve:` same as attack curve but for the release of the sound
- `rate:` playback rate, where 1.0 is normal speed (0.5 is half speed, 2.0 is twice speed); specific keywords allow one to transpose in intervals (ie., 1 for minor 2nd higher, -12 for octave lower) or midicents (ie., 100 for minor second higher, -50 for quarter step lower, 1200 for octave higher)
- `start position:` the location within a given buffer from which to begin playback, where 0.0 is the beginning of the file and 1.0 is the end
- `pan:` the stereo location of the sound on a range from -1.0 to 1.0 (left to right)

Inside the software there is a flexible and powerful abstraction called `the_patterner` that allows one to control each of these parameters through the use of special keywords. Keywords are followed by arguments (integers, floating point numbers, and symbols) that allow for variation and randomization of a given parameter. At the current moment there are five functioning keywords, below is a list of them and the way in which they can be implemented (optional arguments are given in &lt;these braces&gt;):

##### `range` &lt;distribution&gt; lo hi

- function: randomly outputs values within the given range
- arguments:
  - distribution:
    - white = default (equal probability within the range)
    - drunk <num steps> (random walk within range)
    - exponential / exp <slope> (weighted exponential probability towards upper values)
    - reverse exponential / rexp <slope> (weighted exponential probability towards lower values)
      - slope: greater than 1.0 = steeper slope
      - default slope = 2.0
  - lo / hi:
    - int1 int2
    - float1 float2

##### `sequence` or `seq` list

- function: continuously sequences the items given in a loop; currently only sequences in the item order but will soon include different sequence orderings
- arguments:
  - list: any list of ints/floats/symbols

##### `random` or `rand` list

- function: randomly selects from items within the list
- arguments:
  - list: any list of ints/floats/symbols

##### `urn` list

- function: randomly selects without repetitions from items within the list; once all have been chosen the list is reset
- arguments:
  - list: any list of ints/floats/symbols

##### `wrandom` or `wrand` [list][weights]

- function: randomly selects from the given list according to the given relative weights
  - brackets are required for the list and weights
  - weights are normalized to 1
  - both list and weights needs to be the same length
- list: any list of ints/floats/symbols
- weights: list of ints/floats

Check out two videos of how it works below:

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="{{ site.baseurl }}/assets/video/gsfp-video-demonstration.mp4"></iframe>
</div>
