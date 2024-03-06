import { Container, Heading } from "@chakra-ui/react";
import { useAuthQuery } from "@rwatt451/ordercloud-react";
import { Me } from "ordercloud-javascript-sdk";
import { FC } from "react";

const Dashboard: FC = () => {
  const { data: user } = useAuthQuery({
    queryKey: ["currentUser"],
    queryFn: async () => await Me.Get(),
    retry: false,
    refetchOnMount: false,
  });

  return (
    <Container maxW="full">
      <Heading size="md" py={5}>
        Dashboard
      </Heading>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </Container>
  );
};

export default Dashboard;
