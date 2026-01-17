"use client"

import { useEffect, useState } from "react"

export const content = [
  { id: "1", data: "The only thing we have to fear is fear itself." },
  { id: "2", data: "In the end, it's not the years in your life that count. It's the life in your years." },
  { id: "3", data: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
  { id: "4", data: "The way to get started is to quit talking and begin doing." },
  { id: "5", data: "Your time is limited, so don't waste it living someone else's life." }
]

function getQuoteIndex() {
  // Calculate default based on day of month
  const dayNumber = new Date().getDate()
  return dayNumber % content.length
}

export default function Quotes() {
  // Initialize with the calculated value immediately
  const [quoteIndex, setQuoteIndex] = useState<number>(getQuoteIndex)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark that we're on client side
    setIsClient(true)
    
    const todayString = new Date().toDateString()
    const savedDate = sessionStorage.getItem("savedDate")
    const savedIndex = sessionStorage.getItem("savedIndex")

    let index: number

    if (savedDate === todayString && savedIndex !== null) {
      index = Number(savedIndex)
    } else {
      const dayNumber = new Date().getDate()
      index = dayNumber % content.length

      sessionStorage.setItem("savedDate", todayString)
      sessionStorage.setItem("savedIndex", String(index))
    }

    setQuoteIndex(index)
  }, [])

  // Show the quote immediately - no loading state needed
  return (

      <div className="w-2/3 max-w-xl bg-white rounded-lg shadow-lg p-6 m-2">
        <p className="text-xl text-gray-800 italic leading-relaxed">
          "{content[quoteIndex].data}"
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Quote of the day
        </p>
      </div>
   
  )
}