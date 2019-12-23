import Mock from 'mockjs'

// get surveyInfo list in home
Mock.mock('/api/getSurveyList', 'get', {
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
Mock.mock('/api/getCommentList', 'post', function (option) {
  return Mock.mock({
    status: 200,
    message: 'Success',
    'data|3-5': [
      {
        id: '@increment(2)',
        content: '@cword(10, 30)',
        publish_time: '@datetime',
        author: {
          id: '@int(100-1000)',
          nickname: '@philosopher()',
          avatar: '@dataImage(100x100)'
        }
      }
    ]
  })
})

// get more children by survey_id
Mock.mock('/api/getChapterList', 'post', function (option) {
  return Mock.mock({
    status: 200,
    message: 'Success',
    'data|5-10': [
      {
        id: '@increment(1)',
        pid: '@int(3)',
        title: '@cword(5, 10)',
        count: '@int(20, 30)',
        avatar: '@dataImage(100x100)',
        'children|3-5': [
          {
            id: '@increment(1)',
            title: '@cword(5, 10)',
            count: '@int(3, 10)',
            user_count: {
              finished: '@int(1,9)'
            }
          }
        ],
        user_count: {
          finished: '@int(1,9)'
        }
      }
    ]
  })
})

// get ques by survey_id
Mock.mock('/api/getQuesList', 'post', function (option) {
  return Mock.mock({
    status: 200,
    message: 'Success',
    data: {
      'ques|1-5': [
        {
          id: '@increment(1)',
          title: '@cword(5, 10)',
          'content|1-4': [
            {
              type: 'radio',
              option: '@word(1)',
              value: '@cword(5, 10)'
            }
          ]
        }
      ],
      count: 10
    }
  })
})
