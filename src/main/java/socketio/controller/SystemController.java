package socketio.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import socketio.model.bean.Response;
import socketio.properties.PoolProperties;
import socketio.util.ResponseUtil;

@RestController
@Api(description = "消息服务运行时相关配置")
public class SystemController {


    @Autowired
    PoolProperties poolProperties;

    @ApiOperation("设置单个池最大作业数")
    @PostMapping(value = "/maxQueueCount")
    public Response setQueueMaxCount(int maxCount)
    {
        try {
            poolProperties.setMaxqueuecount(maxCount);
           return ResponseUtil.Sucess("设置作业最大","成功",maxCount);
        }catch (Exception ex)
        {
           return ResponseUtil.Error("设置失败",ex);
        }
    }






}
