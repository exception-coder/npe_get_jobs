package getjobs.modules.integration.service.mediasaver;

import getjobs.modules.integration.dto.ApiResponse;
import getjobs.modules.integration.service.mediasaver.client.FaceBookSaverClient;
import getjobs.modules.integration.service.mediasaver.client.InstSaveClient;
import getjobs.modules.integration.service.mediasaver.client.TikSaveClient;
import getjobs.modules.integration.service.mediasaver.client.TwitterSaverClient;
import getjobs.modules.integration.service.mediasaver.dto.MediaSaverResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

/**
 * 媒体保存服务
 * 提供统一的社交媒体内容下载接口
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class MediaSaverService {

    private final TikSaveClient tikSaveClient;
    private final InstSaveClient instSaveClient;
    private final FaceBookSaverClient faceBookSaverClient;
    private final TwitterSaverClient twitterSaverClient;

    /**
     * 下载TikTok视频
     * 
     * @param videoUrl TikTok视频URL
     * @return 视频信息
     */
    public Mono<ApiResponse<MediaSaverResponse>> downloadTikTok(String videoUrl) {
        return tikSaveClient.ajaxSearch(videoUrl);
    }

    /**
     * 下载Instagram内容
     * 
     * @param contentUrl Instagram内容URL
     * @return 内容信息
     */
    public Mono<ApiResponse<MediaSaverResponse>> downloadInstagram(String contentUrl) {
        return instSaveClient.ajaxSearch(contentUrl);
    }

    /**
     * 下载Facebook视频
     * 
     * @param videoUrl Facebook视频URL
     * @return 视频信息
     */
    public Mono<ApiResponse<MediaSaverResponse>> downloadFacebook(String videoUrl) {
        return faceBookSaverClient.ajaxSearch(videoUrl);
    }

    /**
     * 下载Twitter/X视频
     * 
     * @param videoUrl Twitter视频URL
     * @return 视频信息
     */
    public Mono<ApiResponse<MediaSaverResponse>> downloadTwitter(String videoUrl) {
        return twitterSaverClient.ajaxSearch(videoUrl);
    }

    /**
     * 智能识别URL并下载
     * 根据URL自动判断平台类型并调用对应的下载服务
     * 
     * @param url 媒体URL
     * @return 下载结果
     */
    public Mono<ApiResponse<MediaSaverResponse>> downloadByUrl(String url) {
        if (url == null || url.trim().isEmpty()) {
            return Mono.just(ApiResponse.error("URL不能为空"));
        }

        String lowerUrl = url.toLowerCase();

        if (lowerUrl.contains("tiktok.com") || lowerUrl.contains("douyin.com")) {
            return downloadTikTok(url);
        } else if (lowerUrl.contains("instagram.com")) {
            return downloadInstagram(url);
        } else if (lowerUrl.contains("facebook.com") || lowerUrl.contains("fb.com")) {
            return downloadFacebook(url);
        } else if (lowerUrl.contains("twitter.com") || lowerUrl.contains("x.com")) {
            return downloadTwitter(url);
        } else {
            return Mono.just(ApiResponse.error("不支持的URL类型，仅支持 TikTok、Instagram、Facebook、Twitter"));
        }
    }
}
