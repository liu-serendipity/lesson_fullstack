// 队列  数组  线性
    // push  shift  FIFO

const queue = [];  // 数组表达队列
queue.push('小册一姐');
queue.push('小册二姐');
queue.push('小册三姐');

while (queue.length) {
    const top = queue[0];
    console.log('目前在排队的是：',top);
    queue.shift();
}