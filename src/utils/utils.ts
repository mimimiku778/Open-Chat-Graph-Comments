export function validateStringNotEmpty(str: string) {
  const normalizedStr = str.normalize('NFKC')
  const string = normalizedStr.replace(/[\u200B-\u200D\uFEFF]/g, '')
  return string.trim() !== ''
}

const weekdays = ['日', '月', '火', '水', '木', '金', '土']

export function formatDatetimeWithWeekdayFromMySql(datetime: string): string {
  const obj = new Date(datetime.replace(/-/g, '/'))
  return `${obj.toLocaleDateString()}(${weekdays[obj.getDay()]}) ${obj.toLocaleTimeString('en', {
    hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'
  })}`
}

export async function fetchApi<T>(url: string, method: string = 'GET', bodyData: unknown) {
  const body = bodyData ? JSON.stringify(bodyData) : undefined

  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json", },
    body,
  })

  const data: T | ErrorResponse = await response.json()

  if (!response.ok) {
    const errorMessage = (data as ErrorResponse).error.message
    console.log(errorMessage)
    throw new Error(errorMessage)
  }

  return data as T
}