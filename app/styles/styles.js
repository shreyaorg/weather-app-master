const bgImg = require('../images/2.jpg');

export const mainComponent = {
  backgroundImage: String.prototype.concat("url('.", bgImg, "')"),
  backgroundRepeat: 'no-repeat',
  minHeight: '100%',
  position: 'relative',
  backgroundSize: '1800px',
};

export const vcenter = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
};

export const detailLink = {
  color: 'inherit',
};

export const currentIcon = {
  fontSize: '2em',
  cursor: 'pointer',
};

export const forcastDay = {
};

export const hcenter = {
  display: 'flex',
  justifyContent: 'center',
  fontSize : '18px',
  fontWeight:'bold',
};

