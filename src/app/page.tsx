import Molecule from "@/components/molecule";

export default function Home() {


  // useEffect(() => {
  //   // console.log(process.env);
  //   // console.log('config.env.teste', config.env.teste)
  //   // console.log('config.env.publicTeste', config.env.publicTeste)
  // }, [])

  return (
    <main className="container">
      <Molecule.Title description="My journey so far" title="Timeline" />
    </main>
  );
}
