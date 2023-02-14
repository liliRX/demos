const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)


const searchMap = {
    'baidu': 'https://www.baidu.com/s?wd=',
    'bing': 'https://cn.bing.com/search?q='
}
console.log(searchMap)

let searchType = 'bing'//默认搜索引擎是bing
let curModifyIdx = 0
let $curModifyIdx = null
let pageStatus = 'setting'//默认值是拟切换为setting；也就是当前为preview预览状态

//页面数据结构-title，data>（name,url）
let data = [
    // {
    //     title: '常用网站',
    //     data: [
    //         {
    //             name: '哔哩哔哩',
    //             url: 'https://www.bilibili.com/'
    //         },
    //         {
    //             name: '知乎',
    //             url: 'https://www.zhihu.com'
    //         }
    //     ]
    // },
    // {
    //     title: '学习文档',
    //     data: [
    //         {
    //             name: ' MDN文档',
    //             url: 'https://www.bilibili.com/'
    //         },
    //         {
    //             name: 'vue3js',
    //             url: 'https://www.zhihu.com'
    //         },
    //         {
    //             name: ' MDN文档',
    //             url: 'https://www.bilibili.com/'
    //         },
    //         {
    //             name: 'vue3js',
    //             url: 'https://www.zhihu.com'
    //         }, {
    //             name: ' MDN文档',
    //             url: 'https://www.bilibili.com/'
    //         },
    //         {
    //             name: 'vue3js',
    //             url: 'https://www.zhihu.com'
    //         }, {
    //             name: ' MDN文档',
    //             url: 'https://www.bilibili.com/'
    //         },
    //         {
    //             name: 'vue3js',
    //             url: 'https://www.zhihu.com'
    //         }, {
    //             name: ' MDN文档',
    //             url: 'https://www.bilibili.com/'
    //         },
    //         {
    //             name: 'vue3js',
    //             url: 'https://www.zhihu.com'
    //         }
    //     ]
    // }
    //存在一些问题，例如DOM结构的a标签有text-decoration
]
load(data)
render(data)//渲染数据


//切换搜索引擎
$$('.search-tab').forEach($tab => {
    console.log($tab)
    $tab.onclick = function () {
        $$('.search-tab').forEach($tab => $tab.classList.remove('active'))
        this.classList.add('active')
        searchType = this.dataset.type
        console.log(searchType)
    }
})

//搜索框的点击和回车事件
document.onkeyup = function (e) {
    console.log(e.key)
    if (e.key === 'Enter') {
        search()
    }//搜索的键盘事件
}
$('.icon-search').onclick = search
function search() {
    let url = searchMap[searchType] + $('.search-ipt input').value
    const $link = document.createElement('a');
    $link.setAttribute('href', url)
    $link.setAttribute('target', '_blank')
    $link.click()//搜索的点击事件
}

//构建DOM结构
/* <li class="list">
<h2>常用网站<span></span></h2>
    <ul class="panel">
        <li class="tag"><svg class="icon icon-rm aria-hidden="true"><use xlink:href="#icon-remove"></use></svg><a href="" target="_blank">B站</a></li> 
        <li class="tag"><svg class="icon icon-rm" aria-hidden="true"><use xlink:href="#icon-remove"></use></svg><a href="" target="_blank">知乎</a></li>
        <li class="tag"><svg class="icon icon-add" aria-hidden="true"><use xlink:href="#icon-add"></use></svg></li>
    </ul>
</li> */
//封装为渲染函数
function render(data) {
    const $itemArr = data.map(obj => {
        const $item = document.createElement('li')
        $item.classList.add('item')
        const $h2 = document.createElement('h2')
        $h2.append(obj.title)
        const $iconSpan = document.createElement('span')
        $iconSpan.innerHTML = '<svg class="icon icon-del" aria-hidden="true"><use xlink:href="#icon-del"></use></svg><svg class="icon icon-edit" aria-hidden="true"><use xlink:href="#icon-edit"></use></svg>'
        $h2.append($iconSpan)
        const $ul = document.createElement('ul')
        $ul.classList.add('panel')
        let $liArray = obj.data.map(item => {
            const $tag = document.createElement('li')
            $tag.classList.add('tag')
            $tag.innerHTML = '<svg class="icon icon-rm" aria-hidden="true"><use xlink:href="#icon-remove"></use></svg>'
            const $a = document.createElement('a')
            $a.setAttribute('href', item.url)
            $a.setAttribute('target', '_blank')
            $a.append(item.name)
            $tag.append($a)
            return $tag
        })
        $ul.append(...$liArray)
        let $icon = document.createElement('li')
        // $icon.classList.add('tag')
        $icon.innerHTML='<svg class="icon icon-add" aria-hidden="true"><use xlink:href="#icon-add"></use></svg>'
        $ul.append($icon)
        $item.append($h2, $ul)
        return $item
    })
    console.log($itemArr)
    $('.list').innerHTML = ''//清空原先的容器
    $('.list').append(...$itemArr)//追加
}

//预览和设置的界面切换（更换class
$('.icon-setting').onclick = function () {
    pageStatus = 'setting'
    $('body').classList.remove('preview')
    $('body').classList.add('setting')
}
$('.icon-back').onclick = function () {
    pageStatus = 'setting'
    $('body').classList.remove('setting')
    $('body').classList.add('preview')
}

//添加标题分类
$('.icon-plus').onclick = function (e) {
    $('.model1').classList.add('show')
    console.log(e.key)
}
$('.model1 .cancel').onclick = function () {
    $('.model1').classList.remove('show')
}
$('.model1 .confirm').onclick = function () {
    let value = $('.modelipt1').value
    // 这里的选择器又忘记了加点了，找了很久
    if (value === '') {
        alert('输入不能为空')
        return
    }
    let obj = {
        title: value,
        data: []
    }
    data.push(obj)
    render(data)
    save()
    $('.model1').classList.remove('show')//渲染完后隐藏弹窗
}

//事件代理，把事件绑定在父节点list上
$('.list').onclick = function (e) {
    const path = e.path ?? (e.composedPath())//兼容性
    console.log(path)//打印出路径
    //删除分类item
    let $delete = path.find($node => $node.classList && $node.classList.contains('icon-del'))
    if ($delete) {
        let $result = path.filter($node => $node.classList && $node.classList.contains('item'))//不需要点，是class的类
        if ($result.length > 0) {
            let $item = $result[0]
            let index = [...$$('.item')].indexOf($item)
            console.log(index)
            data.splice(index, 1)//数组的删除
            render(data)
            save()
        }
        console.log($result)
    }
    //修改分类名称
    let $edit = path.find($node => $node.classList && $node.classList.contains('icon-edit'))
    if ($edit) {
        let $result = path.filter($node => $node.classList && $node.classList.contains('item'))
        if ($result.length > 0) {
            let $item = $result[0]
            let index = [...$$('.item')].indexOf($item)
            curModifyIdx = index
            $curModifyIdx = $item
            console.log(index)
            $('.model2').classList.add('show')
            let title = $item.querySelector(h2).innerText
            $('.modelipt2').value = title
        }
    }
    //添加网站
    let $add = path.find($node => $node.classList && $node.classList.contains('icon-add'))
    if ($add) {
        let $result = path.filter($node => $node.classList && $node.classList.contains('item'))
        if ($result.length > 0) {
            let $item = $result[0]
            let index = [...$$('.item')].indexOf($item)
            console.log(index)
            $('.model3').classList.add('show')
            curModifyIdx = index
            $curModifyIdx = $item
        }
    }
    //移除网站
    let $remove = path.find($node => $node.classList&&$node.classList.contains('icon-rm')) 
  if($remove) {
    let $tag = $remove.parentElement
    let tagArr = [...$tag.parentElement.children]
    let tagIndex = tagArr.indexOf($tag)
    console.log(tagIndex)
    window.$remove = $remove
    console.log($tag)
    let $result = path.filter($node => $node.classList&&$node.classList.contains('item'))
    if($result.length > 0) {
      let $item = $result[0]
      let index = [...$$('.item')].indexOf($item)
      data[index].data.splice(tagIndex, 1)
      save()
      $tag.remove()
    }
  } 
}
//修改分类名称的点击事件
//已经绑定给父元素了，不用再给删除、编辑、添加网站、移除单独绑定click事件
$('.model2 .confirm').onclick = function () {
    let value = $('.modelipt2').value
    // 这里的选择器发生改变
    if (value === '') {
        alert('是否放弃更改')
        return $('.model2').classList.remove('show')
    }
    data[curModifyIdx].title = value
    render(data)
    save()
    $('.model2').classList.remove('show')
}
$('.model2 .cancel').onclick = function () {
    $('.model2').classList.remove('show')
}
//添加网站
$('.model3 .confirm').onclick = function () {
    let name = $('.model3 .site-name').value
    let url = $('.model3 .site-url').value
    // 这里的选择器发生改变
    if (name === ''||url ==='') {
        alert('输入不能为空')
    }
    data[curModifyIdx].data.push({name, url})
    render(data)
    save()
    $('.model3').classList.remove('show')
}
$('.model3 .cancel').onclick = function () {
    $('.model3').classList.remove('show')
}
//移出网站







//存储本地数据
function save() {
    localStorage.setItem('website', JSON.stringify(data))
}
//加载本地数据
function load() {
    let storagedData =localStorage.getItem('website')
    if(storagedData){
        data = JSON.parse(storagedData)
    }else{
        data = []
    }
    
}