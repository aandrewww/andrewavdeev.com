import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProjectPagePreview from './preview-templates/ProjectPagePreview';
import BookshelfPagePreview from './preview-templates/BookshelfPagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('projects', ProjectPagePreview);
CMS.registerPreviewTemplate('bookshelf', BookshelfPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
