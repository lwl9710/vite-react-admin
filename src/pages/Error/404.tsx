import Button from "antd/es/button";


const Error404Page: React.FC = () => {
  const handleClick = () => {
    console.log("点击事件...");
  }
  return (
    <div>
      <Button type="primary" onClick={handleClick}>ClickMe</Button>
      <h1>Welcome to Error-404.</h1>
    </div>
  )
}

export default Error404Page;