import React from 'react';
import Scripture from '../index';

const string = `
<div id="Ps.1" class="chapter">
  <h2 class="ms">BOOK 1</h2>
  <h3 class="mr">PSALMS 1:1-41:13</h3>
  <h3 class="s">The Righteous<br />and the Wicked Contrasted.</h3>
  <p class="b"></p>
  <p class="q1"><span class="v19_1_1"><sup id="Ps.1.1" class="v19_1_1">1</sup>How blessed is the man who does not walk in the counsel of the wicked,</span></p>
  <p class="q2"><span class="v19_1_1">Nor stand in the path of sinners,</span></p>
  <p class="q2"><span class="v19_1_1">Nor sit in the seat of scoffers!</span></p>
  <p class="q1"><span class="v19_1_2"><sup id="Ps.1.2" class="v19_1_2">2</sup>But his delight is in the law of the L<span class="sc">ORD</span>,</span></p>
  <p class="q2"><span class="v19_1_2">And in His law he meditates day and night.</span></p>
  <p class="q1"><span class="v19_1_3"><sup id="Ps.1.3" class="v19_1_3">3</sup>He will be like a tree <span class="it">firmly</span> planted by streams of water,</span></p>
  <p class="q2"><span class="v19_1_3">Which yields its fruit in its season</span></p>
  <p class="q2"><span class="v19_1_3">And its leaf does not wither;</span></p>
  <p class="q2"><span class="v19_1_3">And in whatever he does, he prospers.</span></p>
  <p class="b"></p>
  <p class="q1"><span class="v19_1_4"><sup id="Ps.1.4" class="v19_1_4">4</sup>The wicked are not so,</span></p>
  <p class="q2"><span class="v19_1_4">But they are like chaff which the wind drives away.</span></p>
  <p class="q1"><span class="v19_1_5"><sup id="Ps.1.5" class="v19_1_5">5</sup>Therefore the wicked will not stand in the judgment,</span></p>
  <p class="q2"><span class="v19_1_5">Nor sinners in the assembly of the righteous.</span></p>
  <p class="q1"><span class="v19_1_6"><sup id="Ps.1.6" class="v19_1_6">6</sup>For the L<span class="sc">ORD</span> knows the way of the righteous,</span></p>
  <p class="q2"><span class="v19_1_6">But the way of the wicked will perish.</span></p>
</div>
`; // eslint-disable-line max-len

export default () => (
  <Scripture>{string}</Scripture>
);
