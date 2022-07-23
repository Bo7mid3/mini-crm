import { View, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

import { DataTable, FAB, Modal, Portal } from "react-native-paper";

import DefaultContainer from "@layouts/DefaultContainer";
import Button from "@components/Button";
import Text from "@components/Text";
import { COLORS } from "@constants/theme";
import { default as MaterialIconsIcon } from "react-native-vector-icons/MaterialIcons";
import RessourceActionsMenu from "@components/RessourceActionsMenu";
import { goToAddRessource } from "@helpers/navigation";

const data = [
  {
    name: "Apple",
    field: "Banana",
    date: "20/7/2012",
  },
  {
    name: "Milk",
    field: "Manga",
    date: "28/10/2010",
  },
  {
    name: "Abricot",
    field: "Ananas",
    date: "12/4/2022",
  },
];

export default function ListRessources() {
  const [page, setPage] = useState(0);
  const [confirmModalVisible, setConfirmModalVisible] = React.useState(false);

  const showConfirmModal = () => setConfirmModalVisible(true);
  const hideConfirmModal = () => setConfirmModalVisible(false);

  return (
    <>
      <DefaultContainer safe>
        <DataTable style={[styles.topSpacing]}>
          <DataTable.Header>
            <DataTable.Title sortDirection="descending">Name</DataTable.Title>
            <DataTable.Title>Field</DataTable.Title>
            <DataTable.Title>Date</DataTable.Title>
          </DataTable.Header>
          {data.map((row, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell><RessourceActionsMenu deletePressed={showConfirmModal}>{row.name}</RessourceActionsMenu></DataTable.Cell>
              <DataTable.Cell>{row.field}</DataTable.Cell>
              <DataTable.Cell>{row.date}</DataTable.Cell>
            </DataTable.Row>
          ))}
          <DataTable.Pagination
            page={page}
            numberOfPages={3}
            onPageChange={(page) => setPage(page)}
            showFastPagination
          />
        </DataTable>
      </DefaultContainer>
      <Pressable onPress={goToAddRessource} style={{ position: "absolute", padding: 10, bottom: 10, right: 10 }}>
        <MaterialIconsIcon name="add" color={COLORS.primary} size={40} />
      </Pressable>
      <Portal>
        <Modal visible={confirmModalVisible} onDismiss={hideConfirmModal} contentContainerStyle={{
          width: "75%",
          backgroundColor: COLORS.surface,
          alignContent: "center",
          alignItems: "center",
          alignSelf: "center"
        }}>
          <Text style={{fontWeight: "500", fontSize: 16, marginBottom: 25, marginTop: 20}}>{`Are you sure you want to delete *****`}</Text>
          <Button color={COLORS.error} style={{marginBottom: 20}}>Confirm</Button>
          <Button style={{fontSize: 24, marginBottom: 20}}>Cancel</Button>
        </Modal>
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  topSpacing: {
    marginTop: 20,
  },
  addFab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
  },
});
