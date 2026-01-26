import { useParams } from "react-router"
import CardDetails from "../../components/CardDetails/CardDetails"

const CardPage = () => {
  const { id } = useParams()
  return (
    <CardDetails cardId={id}/>
  )
}

export default CardPage
