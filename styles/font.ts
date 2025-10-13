const fontGenerator = (
  weight: number,
  size: number,
  lineHeight: number,
) => ({
  fontWeight: weight,
  fontSize: `${size}rem`,
  lineHeight: `${lineHeight}%`,
});

const font = {
  H1: fontGenerator(500, 2.25, 140),
  H2: fontGenerator(500, 1.75, 140),
  H3: fontGenerator(500, 1.5, 140),
  H4: fontGenerator(500, 1.25, 140),
  H5: fontGenerator(500, 1.125, 140),
  H6: fontGenerator(500, 1, 140),

  p1: fontGenerator(400, 1.125, 140),
  p2: fontGenerator(400, 1, 160),
  p3: fontGenerator(400, 0.875, 160),
  p4: fontGenerator(400, 0.725, 160),

  btn1: fontGenerator(500, 1.125, 130),
  btn2: fontGenerator(500, 1, 130),
  btn3: fontGenerator(400, 0.875, 130),
};

export default font;
