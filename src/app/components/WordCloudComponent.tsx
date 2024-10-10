export type WordType = {
    text: string;
    value: number;
}

interface WordCloudInt {
    words: WordType[];
}
import WordCloud from 'react-d3-cloud';

// import { scaleOrdinal } from 'd3-scale';
// import { schemeCategory10 } from 'd3-scale-chromatic';


export default function WordCloudComponent({ words }: WordCloudInt) {
    return (
        <WordCloud
            data={words}
            width={500}
            height={500}
            font="Times"
            fontStyle="italic"
            fontWeight="bold"
            fontSize={(word) => Math.log2(word.value) * 5}
            spiral="rectangular"
            rotate={(word) => 0}
            padding={5}
            random={Math.random}
        // fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
        // onWordClick={(event, d) => {
        //     console.log(`onWordClick: ${d.text}`);
        // }}
        // onWordMouseOver={(event, d) => {
        //     console.log(`onWordMouseOver: ${d.text}`);
        // }}
        // onWordMouseOut={(event, d) => {
        //     console.log(`onWordMouseOut: ${d.text}`);
        // }}
        />
    )
}