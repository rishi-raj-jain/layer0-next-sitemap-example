const Page = ({ id }) => {
  return `product/${id}`
}

export default Page

export async function getServerSideProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  }
}
