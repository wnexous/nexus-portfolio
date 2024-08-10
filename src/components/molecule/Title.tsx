import Atom from "../atom";

interface Props {
    title: string
    description: string
}
export default (props: Props) => <div className="flex flex-col">
    <Atom.Text children={props.description} />
    <Atom.Headline children={props.title} />
</div>