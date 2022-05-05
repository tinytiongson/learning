import React from "react";
import DataGrid, {
  Column,
  HeaderFilter,
  FilterPanel,
  FilterRow,
  FilterBuilderPopup,
  Paging,
  Selection,
} from "devextreme-react/data-grid";
import { payloads } from "./data.js";

export default class Pipeline extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className={"content-block"}>Sample</h2>
        <div className={"content-block"}>
          <div className={"dx-card"}>
            <DataGrid
              allowColumnResizing={true}
              dataSource={payloads}
              keyExpr="payload_id"
              showBorders={true}
              columnsAutoWidth="true"
            >
              <FilterBuilderPopup position={filterBuilderPopupPosition} />
              <FilterRow visible={true} />
              <FilterPanel visible={true} />
              <HeaderFilter visible={true} />
              <Selection mode="multiple" showCheckBoxesMode={"onClick"} />
              <Paging defaultPageSize={7} />

              <Column
                dataField="payload_id"
                caption="Payload Id"
                allowHeaderFiltering={false}
              />
              <Column dataField="doc_type" caption="Doc Type" />
              <Column
                dataField="template"
                caption="Template Name"
                allowHeaderFiltering={false}
              />
              <Column
                dataField="received_date"
                caption="Received Date"
                dataType="date"
              />
              <Column dataField="status" caption="Status">
                <HeaderFilter dataSource={statusHeaderFilters} />
              </Column>
            </DataGrid>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const filterBuilderPopupPosition = {
  of: window,
  at: "top",
  my: "top",
  offset: { y: 10 },
};

const statusHeaderFilters = [
  { text: "PENDING", value: "PENDING" },
  { text: "COMPLETED", value: "COMPLETED" },
];
