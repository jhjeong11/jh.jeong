<template>
  <div ref="TuiGrid"></div>
</template>

<script>
import "tui-grid/dist/tui-grid.css";
import "tui-pagination/dist/tui-pagination.css";
import Grid from "tui-grid";
import store from "@/store";
import { mapState } from "vuex";

export default {
  name: "TuiGrid",
  computed: {
    ...mapState(["posts"]),
    // ...mapGetters(["totalPostCount"]),
    gridProps() {
      return {
        data: store.state.posts,
        columns: [
          {
            header: "No.",
            name: "id",
            sortable: true,
            sortingType: 'desc',
          },
          {
            header: "제목",
            name: "title",
            sortable: true,
            sortingType: 'desc',
          },
          {
            header: "작성자",
            name: "name",
            sortable: true,
            sortingType: 'desc',
          },
          {
            header: "댓글수",
            name: "count",
            sortable: true,
            sortingType: 'desc',
            formatter: ({ value }) => (value ? value.length : 0),
          },
        ],
        pageOptions: {
          useClient: true,
          perPage: 5,
        },
      };
    },
    // totalPostCount() {
    //   return this.$store.postCount.length;
    // },
  },

  mounted() {
    const gridOption = {
      el: this.$refs.TuiGrid,
      data: this.gridProps.data,
      columns: this.gridProps.columns,
      pageOptions: this.gridProps.pageOptions,
      scrollX: false,
      usageStatistics: false,
    };
    this.gridInstance = new Grid(gridOption);

    this.gridInstance.on("click", (ev) => {
      const rowKey = ev.rowKey;
      const rowData = ev.instance.store.data.rawData[rowKey];
      console.log(rowData);
      if (ev.columnName === "title" && rowData) {
        this.$router.push(`/detail/${rowData.id}`);
      }
    });
  },
};
</script>
<style scoped>
</style> 