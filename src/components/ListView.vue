<template>
    <div ref="TuiGrid">
    </div>
</template>

<script>
import 'tui-grid/dist/tui-grid.css'
import Grid from 'tui-grid'
import { externalData } from '@/data/index.js';

export default {
    name: 'TuiGrid',

    data() {
        return {
            gridProps: {
                data: externalData,
                columns: [
                    {
                        header: '제목',
                        name: 'title',
                    },
                    {
                        header: '작성자',
                        name: 'name',
                    },
                    {
                        header: '댓글수',
                        name: 'count',
                    },
                ],
                pageOptions: {
                    useClient: true,
                    perPage: 5,
                },
            },
        };
    },
    mounted() {
        const gridOption = {
            el: this.$refs.TuiGrid,
            data: this.gridProps.data,
            columns: this.gridProps.columns,
            rowHeaders: ['rowNum'],
            pageOptions: this.gridProps.pageOptions,
            scrollX:false,
            usageStatistics: false,
        };

        this.gridInstance = new Grid(gridOption);

        this.gridInstance.on('click', (ev) => {
            const rowKey = ev.rowKey
            const rowData = ev.instance.store.data.rawData[rowKey]
            console.log(rowData)
            if (ev.targetType === 'cell' && ev.columnName === 'title') {
                console.log('title:', ev.value)
                this.goToPageTest()
            }
        });
    },
    methods: {
        goToPageTest() {
            this.$router.push('/detail')
        },
    }
}
</script>
<style scoped>

</style> 