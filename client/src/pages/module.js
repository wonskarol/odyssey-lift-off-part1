import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import { ModuleDetail } from "../components";

export const GET_MODULE = gql`
  query getModule($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      videoUrl
      content
      title
      id
    }
    track(id: $trackId) {
      title
      modules {
        title
        length
        id
      }
    }
  }
`;

const Module = ({ trackId, moduleId }) => {
  const { loading, error, data } = useQuery(GET_MODULE, {
    variables: { trackId, moduleId },
  });

  return (
    <Layout fullWidth>
      <QueryResult error={error} loading={loading} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};
export default Module;
