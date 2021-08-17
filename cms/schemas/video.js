export default {
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    {
      name: 'mp4',
      title: 'MP4 format',
      type: 'file',
      options: {
        accept: 'video/mp4'
      }
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      title: 'Alternative text (for screen readers)',
      type: 'string',
      options: {
        isHighlighted: true
      }
    }
  ]
}