class List {
    //构造函数
    constructor() {
        this.listSize = 0; //初始化元素个数为0
        this.pos = 0; //初始化位置为0
        this.dataStore = []; //初始化空数组来保存列表元素
        this.clear = clear;
        this.find = find; //寻找元素
        this.toString = toString; //显示列表中的元素
        this.insert = insert;
        this.append = append;
        this.remove = remove;
        this.front = front;
        this.end = end;
        this.prev = prev;
        this.next = next;
        this.length = length; //列表中的元素总数
        this.currPos = currPos;
        this.moveTo = moveTo;
        this.getElement = getElement;
        this.contains = contains; //判断给定值是否在列表中
    }

    //该方法给列表的最后一个位置添加一个新的元素，待插入成功后，更新列表中的元素个数
    append(element) {
        this.dataStore[this.listSize++] = element;
    }

    //该方法通过循环查找给定元素是否在列表中，如果存在返回元素的位置，否则返回 -1
    find(element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }

    //删除列表中的某一元素，该方法通过使用find()方法返回元素的位置对 dataStore 数组进行截取，如果删除成功，返回 true , 并将 listSize 的值减1，更新列表长度，否则返回 false
    remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

    //返回列表中总的元素个数，该方法直接将 listSize 返回即可
    length() {
        return this.listSize;
    }

    //该方法直接返回了列表数组，显示出当前列表内容
    toString() {
        return this.dataStore;
    }

    //向列表某个位置添加一个元素，该方法需要传入两个参数，第一个参数表示待插入的元素，第二个参数表示待插入元素的前一个元素，用于确定插入元素的位置，并调用 splice 方法更改列表数组，插入成功后更新 listSize 并返回 true ， 否则返回 false
    insert(element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            this.listSize++;
            return true;
        }
        return false;
    }

    //清空列表，该方法使用 delete 操作符删除 dataStore 数组 ， 接着创建新的数组，并将其 listSize 和 pos 初始化设为 1 。
    clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

    //将列表的位置移到第一个位置上
    front() {
        this.pos = 0;
    }

    //将列表的位置移到最后一个位置上
    end() {
        this.pos = this.listSize - 1;
    }

    //将当前位置前移一位
    prev() {
        if (this.pos > 0) {
            this.pos--;
        } else {
            console.log('您当前已在首位');
        }
    }

    //将当前位置后移一位
    next() {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        } else {
            console.log('您当前已在末尾');
        }
    }

    //将当前位置移动到指定位置
    moveTo(position) {
        if (position < 0 || position > (this.listSize - 1)) {
            console.log('请输入正确的位置');
        } else {
            this.pos = position;
        }
    }

    //返回列表的当前位置
    currPos() {
        return this.pos;
    }

    //返回当前位置的元素
    getElement() {
        return this.dataStore[this.pos];
    }

    //判断给定值是否在列表中
    contains(element) {
        if (this.dataStore.indexOf(element) > -1) return true;
        else return false;
    }
}
