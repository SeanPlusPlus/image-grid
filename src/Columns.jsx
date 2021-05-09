import React, { useState, useEffect } from 'react'

function getImageUrl(h) {
  return `https://dummyimage.com/600x${h}/D3D3D3/111`
}

function updateGrid(grid, imageId, total) {
  const images = []
  for (var i = 0; i < grid.length; i++) {
    const column = grid[i]
    for (var k = 0; k < column.images.length; k++) {
      if (column.images[k].id !== imageId) {
        images.push(column.images[k])
      }
    }
  }
  const columns = initColumns(total)
  images.forEach((img) => {
    const idx = getShortestColumnIdx(columns, img.height)
    columns[idx].images.push(img)
    columns[idx].height += parseInt(img.height, 10)
  })
  return columns
}

function getShortestColumnIdx(cols) {
  const heights = []
  for (var i = 0; i < cols.length; i++) {
    const col = cols[i]
    if (col.images.length === 0) {
      return i
    }
    heights.push(col.height)
  }
  return heights.indexOf(Math.min.apply(Math, heights));
}

function randomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min) + min)
}

function initColumns(total) {
  const columns = []
  for (var i = 0; i < total; i++) {
    columns[i] = {images: [], height: 0}
  }
  return columns
}

function getRandomHeights(num) {
  return [...Array(num)].map(() => randomNumber(200, 400));
}

function Columns({ total }) {
  const [grid, setGrid] = useState([])
  const totalImages = 13
  const heights = getRandomHeights(totalImages)
  const promises = []
  const columns = initColumns(total)

  heights.forEach((h, index) => {
    const src = getImageUrl(h)
    const img = new Image()

    promises.push(new Promise((resolve) => {
      img.onload = () => {
        resolve({height: img.height, src: src, id: index})
      }
    }))
    img.src = src
  })

  useEffect(() => {
    Promise.all(promises).then((values) => {
      values.forEach((img) => {
        const idx = getShortestColumnIdx(columns, img.height)
        columns[idx].images.push(img)
        columns[idx].height += parseInt(img.height, 10)
      })
      setGrid(columns)
    })
  }, [])

  function removeImage(e) {
    e.preventDefault()
    const imageId = parseInt(e.target.id, 10)
    setGrid(updateGrid(grid, imageId, total))
  }

  function playAgain(e) {
    e.preventDefault()
    const heights = getRandomHeights(totalImages)
    const promises = []
    const columns = initColumns(total)

    heights.forEach((h, index) => {
      const src = getImageUrl(h)
      const img = new Image()

      promises.push(new Promise((resolve) => {
        img.onload = () => {
          resolve({height: img.height, src: src, id: index})
        }
      }))
      img.src = src
    })

    Promise.all(promises).then((values) => {
      values.forEach((img) => {
        const idx = getShortestColumnIdx(columns, img.height)
        columns[idx].images.push(img)
        columns[idx].height += parseInt(img.height, 10)
      })
      setGrid(columns)
    })
  }

  return <>
    {grid.map((column, idx) => (
      <div className="col" key={idx}>
        {column.images.map((img) => (
          <img
            id={img.id}
            key={img.id}
            src={img.src}
            alt={img.src}
            onClick={removeImage}
          />
        ))}
        {(idx === 0) && (column.images.length === 0) && (
          <div className="play-again">
            <button
              type="button"
              className="btn btn-primary"
              onClick={playAgain}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    ))}
  </>
}

export default Columns
