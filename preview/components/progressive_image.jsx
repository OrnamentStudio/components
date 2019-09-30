import React from 'react';
import ProgressiveImage from '../../src/progressive_image';
import '../../src/progressive_image/index.css';


const ProgressiveImagePreview = () => (
  <section>
    <h2>Progressive image</h2>
    <ProgressiveImage
      style={{ paddingTop: '100%' }}
      src="https://cdn.vox-cdn.com/thumbor/wMyV95aDmiMifoFWyC6-5p0cYU4=/0x0:2700x1800/1200x800/filters:focal(1006x666:1438x1098)/cdn.vox-cdn.com/uploads/chorus_image/image/63231673/the_dark_knight_poster_crop_2700.0.jpg"
      preview="https://imgix.ranker.com/user_node_img/50061/1001219272/original/outcries-from-conservatives-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"
    />
  </section>
);

export default ProgressiveImagePreview;
