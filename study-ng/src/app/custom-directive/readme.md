指令directive

#1 属性型指令：
    该指令可改变元素、组件或其他指令的外观和行为。
    通过注入ElementRef来获取可操作的宿主元素。
    如：AppHiddenDirective



    
#2 结构型指令：
    该指令可通过添加或移除DOM元素来改变DOM布局。
    通过注入TemplateRef来获取可操作的宿主元素，注入ViewContainerRef来获取宿主容器。
    如：AppShowDirective