export function calculateScores(answers) {
  const categories = ['People', 'Process', 'Promotion']
  const byCategory = {}
  categories.forEach((category) => {
    const values = answers
      .map((answer, index) => ({ answer, category: questionsCategory(index) }))
      .filter((item) => item.category === category)
      .map((item) => item.answer)
      .filter(Boolean)
    byCategory[category] = values.length ? Math.round((values.reduce((sum, value) => sum + value, 0) / (values.length * 5)) * 100) : 0
  })
  const answered = answers.filter(Boolean)
  const overall = answered.length ? Math.round((answered.reduce((sum, value) => sum + value, 0) / (answered.length * 5)) * 100) : 0
  return { byCategory, overall }
}

function questionsCategory(index) {
  if (index < 3) return 'People'
  if (index < 6) return 'Process'
  return 'Promotion'
}

export function scoreCategory(overall) {
  if (overall < 40) return 'Needs Attention'
  if (overall < 70) return 'Developing'
  return 'Strong Foundation'
}
