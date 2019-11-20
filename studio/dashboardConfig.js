export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd5a8f2d38c3f922e00979f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vjpzp82g',
                  apiId: '87c48894-73c9-4154-8210-2d7e001d5a47'
                },
                {
                  buildHookId: '5dd5a8f27341beba50cd1300',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xqhdn15j',
                  apiId: 'e2a83581-24ff-4908-b330-1653ba8e67a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eriver14/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-xqhdn15j.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
