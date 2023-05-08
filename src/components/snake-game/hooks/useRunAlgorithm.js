import initialTable from "../data"
// import startTable from "../startTable";
// import SnakeLinkedList from "../SnakeLinkedList"



const useRunAlgorithm = () => {
  
  let count = 0;

	const run = (body, direction, apple) => {


    const evaluateHeadMove = (snake, direction, apple) => {
      count+=1;
      let headi = snake[0][0]
      let headk = snake[0][1]
      let headString = JSON.stringify(snake[0])
      let appleString = JSON.stringify(apple)
      let snakeBodyString = JSON.stringify(snake.slice(1))

      if (count <= 10) {
        // snake = snake
      } else if (snakeBodyString.includes(headString)) {
        snake = 0

      } else if (direction === 'up' && headString == appleString) {
        snake.unshift([headi - 1, headk])
      } else if (direction === 'down' && headString == appleString) {
        snake.unshift([headi + 1, headk])
      } else if (direction === 'right' && headString == appleString) {
        snake.unshift([headi, headk + 1])
      } else if (direction === 'left' && headString == appleString) {
        snake.unshift([headi, headk - 1])

      } else if (direction === 'up' && initialTable[headi - 1][headk] === 0) {
        snake.unshift([headi - 1, headk])
        snake.pop()
      } else if (direction === 'down' && initialTable[headi + 1][headk] === 0) {
        snake.unshift([headi + 1, headk])
        snake.pop()
      } else if (direction === 'right' && initialTable[headi][headk + 1] === 0) {
        snake.unshift([headi, headk + 1])
        snake.pop()
      } else if (direction === 'left' && initialTable[headi][headk - 1] === 0) {
        snake.unshift([headi, headk - 1])
        snake.pop()

      } else if (direction === 'up' && initialTable[headi - 1][headk] === 2) {
        snake = 0
      } else if (direction === 'down' && initialTable[headi + 1][headk] === 2) {
        snake = 0
      } else if (direction === 'right' && initialTable[headi][headk + 1] === 2) {
        snake = 0
      } else if (direction === 'left' && initialTable[headi][headk - 1] === 2) {
        snake = 0

      } 
      return snake
    }

    const renderSnake = (body, direction, table, apple) => {
		  let newTable = JSON.parse(JSON.stringify(table))
      let bodyToRender = evaluateHeadMove(body, direction, apple)

      if (count <=10) {
        newTable = initialTable
      } else if (bodyToRender == 0) {
        bodyToRender = 0
      } else {
        for (let coordinates of bodyToRender) {
          let [i, k] = coordinates
          newTable[i][k] = 1
        }
        let [i, k] = apple
        newTable[i][k] = 3
      }
      return [newTable, bodyToRender]
    }

    return renderSnake(body, direction, initialTable, apple)
	}
	return [run]
}

export default useRunAlgorithm;