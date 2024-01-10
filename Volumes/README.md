### Volume Management 

#### Create a volume
```css
    spec:
      containers:
      - name: local-web
        image: nginx
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
        ports:
        - name: web
          containerPort: 80
        volumeMounts:
        - name: local
          mountPath: /usr/share/nginx/html
      volumes:
      - name: local
        hostPath: 
          path: /var/nginxserver
```

### deploy the application

```
kubectl apply -f .\local-web.yml
```

### Make some changes to the index.html file

```
kubectl exec -it <pod name> -- /bin/bash
cd /usr/share/nginx/html/
echo "Hello World" > default.html
ls -l
```

Now we have made some changes in /usr/share/nginx/html/
Now delete the container and recreate it again

```css
kubectl delete deploy local-web
kubectl apply -f .\local-web.yml
```

Now check the changes
```css
kubectl exec -it <pod name> -- /bin/bash
ls /usr/share/nginx/html/
```