import Mock from 'mockjs'

// get surveyInfo list in home
Mock.mock('/api/getSurveyInfoList', 'get', {
  status: 200,
  message: 'Success',
  'data|5-8': [
    {
      id: '@increment(3)',
      'title|1': [
        'T思修题库',
        'T史纲题库',
        'T毛概题库',
        'T马原题库',
        '思修题库',
        '史纲题库',
        '毛概题库',
        '马原题库'
      ],
      subtitle: '@cword(10, 30)',
      'avatar|1': [
        '/static/T思修.png',
        '/static/T史纲.png',
        '/static/T毛概.png',
        '/static/T马原.png',
        '/static/思修.png',
        '/static/史纲.png',
        '/static/毛概.png',
        '/static/马原.png'
      ]
    }
  ]
})

// get comments by survey_id
Mock.mock('/api/getComment', 'post', function (option) {
  return Mock.mock({
    status: 200,
    message: 'Success',
    'data|3-5': [
      {
        id: '@increment(33)',
        content: '@cword(10, 30)',
        publish_time: '@datetime',
        author: {
          id: '@int(100-1000)',
          nickname: '@philosopher()',
          avatar: '@dataImage(78x78)'
        }
      }
    ]
  })
})
