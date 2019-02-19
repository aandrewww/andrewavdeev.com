import React from 'react';
import PropTypes from 'prop-types';
import { TravelTemplate } from '../../templates/travel-page';

const TravelPagePreview = ({ entry, widgetFor }) => (
  <TravelTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

TravelPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default TravelPagePreview;
